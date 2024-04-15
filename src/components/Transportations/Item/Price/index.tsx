import { FC } from "react";
import { Col, Typography } from "antd";
import { ItemPriceProps } from "./ItemPrice.interface";

export const ItemPrice: FC<ItemPriceProps> = ({ price, fuelPrice }) => {
  return (
    <Col
      span={4}
      style={{
        textAlign: "center",
      }}
    >
      <Typography.Title
        level={5}
        style={{
          margin: 0,
          padding: 0,
          fontSize: 20,
          fontWeight: 500,
        }}
      >
        {price} ₽
      </Typography.Title>
      <p
        style={{
          color: "#818281",
          margin: 0,
          padding: 0,
          fontSize: 14,
        }}
      >
        ГСМ: {fuelPrice} ₽
      </p>
    </Col>
  );
};
