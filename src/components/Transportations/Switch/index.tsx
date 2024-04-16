import { FC } from "react";
import { SwapOutlined } from "@ant-design/icons";
import { SwitchFieldsProps } from "./SwitchFields.interface";

export const SwitchFields: FC<SwitchFieldsProps> = ({ handler }) => {
  return (
    <div
      onClick={handler}
      style={{
        height: "38px",
        width: "38px",
        border: "1px solid #818281",
        borderRadius: "20px",
        textAlign: "center",
        verticalAlign: "middle",
        position: "absolute",
        zIndex: 999,
        backgroundColor: "white",
        left: "47.5%",
        cursor: "pointer",
      }}
    >
      <SwapOutlined
        style={{
          height: "16px",
          width: "16px",
          textAlign: "center",
          verticalAlign: "middle",
          color: "#818281",
          cursor: "pointer",
          fontSize: "1.2rem",
          marginTop: ".7rem",
        }}
      />
    </div>
  );
};
