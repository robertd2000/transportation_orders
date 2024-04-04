import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export const selectOptions: { label: ReactNode; value: string }[] = [
  {
    label: (
      <>
        <UnorderedListOutlined />
      </>
    ),
    value: "list",
  },
  {
    label: (
      <>
        <AppstoreOutlined />
      </>
    ),
    value: "card",
  },
];
