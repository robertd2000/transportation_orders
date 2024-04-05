import { FC, ReactNode } from "react";
import { ConfigProvider } from "antd";

type Props = {
  children: ReactNode;
};

export const AntdProvider: FC<Props> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            borderRadiusLG: 12,
          },
          List: {
            itemPadding: "6px 0",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
