import { FC, ReactNode } from "react";
import { ConfigProvider } from "antd";

type Props = {
  children: ReactNode;
};

export const AntdProvider: FC<Props> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Roboto",
        },
        components: {
          Card: {
            borderRadiusLG: 12,
          },
          List: {
            itemPadding: "6px 0",
          },
          Input: {
            paddingInline: 12,
            paddingBlock: 12,
            fontSize: 16,
            borderRadius: 8,
          },
          DatePicker: {
            paddingInline: 12,
            paddingBlock: 12,
            fontSize: 14,
            borderRadius: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
