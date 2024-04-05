import { FC, ReactNode } from "react";
import { ConfigProvider } from "antd";

type Props = {
  children: ReactNode;
};

export const AntdProvider: FC<Props> = ({ children }) => {
  return (
    <ConfigProvider
      // componentSize={"large"}
      theme={{
        token: {
          fontFamily: "Roboto",
          fontSize: 18,
          colorText: "#404140",
          fontWeightStrong: 500,
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
          Typography: {
            fontWeightStrong: 500,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
