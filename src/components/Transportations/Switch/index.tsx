import { FC } from "react";
import { SwapOutlined } from "@ant-design/icons";
import { SwitchFieldsProps } from "./SwitchFields.interface";
import style from "./styles/SwitchFields.module.scss";

export const SwitchFields: FC<SwitchFieldsProps> = ({ handler }) => {
  return (
    <div className={style.swapWrapper} onClick={handler} style={{}}>
      <SwapOutlined
        className={style.icon}
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
