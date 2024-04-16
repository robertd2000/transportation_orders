import { FC } from "react";
import { Col, Typography } from "antd";
import { ItemPriceProps } from "./ItemPrice.interface";
import style from "./styles/ItemPrice.module.scss";

export const ItemPrice: FC<ItemPriceProps> = ({ price, fuelPrice }) => {
  return (
    <Col
      span={4}
      className={style.card}
      style={{
        textAlign: "center",
      }}
    >
      <Typography.Title level={5} className={style.price}>
        {price} ₽
      </Typography.Title>
      <p className={style.fuel}>ГСМ: {fuelPrice} ₽</p>
    </Col>
  );
};
