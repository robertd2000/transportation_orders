import { useQuery } from "@tanstack/react-query";
import { getTransportations } from "../../../api/transportation.api";
import { List } from "antd";
import VirtualList from "rc-virtual-list";
import { useEffect, useState } from "react";
import { Transportation } from "../../../types/transportation.interface";
import { TransportationItem } from "../Item";

export const TransportationList = () => {
  const [data, setData] = useState<Transportation[]>([]);
  const [page, setPage] = useState<number>(0);

  const { refetch } = useQuery({
    queryKey: ["getTransportations", { page }],
    queryFn: async () => {
      const data = await getTransportations({
        offset: 20,
        page,
      });

      setData((prev) => [...prev, ...data]);
      return data;
    },
  });

  const appendData = () => {
    refetch();
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (
      Math.abs(
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop - 400
      ) <= 1
    ) {
      appendData();
      setPage((prev) => prev + 1);
    }
  };

  return (
    <List split={false}>
      <VirtualList
        data={data}
        height={400}
        itemHeight={116}
        itemKey="id"
        onScroll={onScroll}
      >
        {(item) => <TransportationItem item={item} />}
      </VirtualList>
    </List>
  );
};
