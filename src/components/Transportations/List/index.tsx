import { useQuery } from "@tanstack/react-query";
import { getTransportations } from "../../../api/transportation.api";
import { List } from "antd";
import VirtualList from "rc-virtual-list";
import { useEffect, useState } from "react";
import { Transportation } from "../../../types/transportation.interface";
import { TransportationItem } from "../Item";
import { useAppSelector } from "../../../redux/store";

const height = 380;

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
    if (
      Math.abs(
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop - height
      ) <= 1
    ) {
      appendData();
      setPage((prev) => prev + 1);
    }
  };

  const { grid } = useAppSelector((state) => state.transportationReducer);

  const gridSize = grid === "card" ? 2 : 1;

  return (
    <List
      split={false}
      grid={{
        gutter: 16,
        // xs: 1,
        // sm: 1,
        // md: gridSize,
        // lg: gridSize,
        // xl: gridSize,
        // xxl: gridSize,
        column: gridSize,
      }}
    >
      <VirtualList
        data={data}
        height={height}
        itemHeight={116}
        itemKey="id"
        onScroll={onScroll}
      >
        {(item) => <TransportationItem item={item} />}
      </VirtualList>
    </List>
  );
};
