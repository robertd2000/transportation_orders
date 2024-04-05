import { FC, ReactNode } from "react";
import { ReactQueryProvider } from "./ReactQuery";
import { AntdProvider } from "./Antd";
import { StoreProvider } from "./Store";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AntdProvider>
        <StoreProvider>{children}</StoreProvider>
      </AntdProvider>
    </ReactQueryProvider>
  );
};
