import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTransportations } from "../../../../api/transportation.api";
import { HEIGHT } from "../../../../constants";
import { Transportation } from "../../../../types/transportation.interface";

export const useTransportationsList = () => {
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
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop - HEIGHT
      ) <= 1
    ) {
      appendData();
      setPage((prev) => prev + 1);
    }
  };

  return {
    data,
    onScroll,
  };
};
