import { FC } from "react";
import { Col, Typography } from "antd";
import { getNumber } from "../../../../utils/number";
import { ItemPriceProps } from "./ItemPrice.interface";
import style from "./styles/ItemPrice.module.scss";

export const ItemPrice: FC<ItemPriceProps> = ({ price, fuelPrice }) => {
  return (
    <Col
      lg={4}
      md={24}
      xs={24}
      className={style.card}
      style={{
        textAlign: "center",
      }}
    >
      <Typography.Title level={5} className={style.price}>
        {getNumber(price)} ₽
      </Typography.Title>
      <p className={style.fuel}>ГСМ: {getNumber(fuelPrice)} ₽</p>
    </Col>
  );
};
