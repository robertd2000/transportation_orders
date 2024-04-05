import { FC, ReactNode } from "react";
import { ReactQueryProvider } from "./ReactQuery";
import { AntdProvider } from "./Antd";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AntdProvider>{children}</AntdProvider>
    </ReactQueryProvider>
  );
};
