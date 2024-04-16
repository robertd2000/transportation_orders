import { Col, Row } from "antd";
import { FC } from "react";
import { ItemLocationProps } from "./ItemLocation.interface";
import style from "./styles/ItemLocation.module.scss";

export const ItemLocation: FC<ItemLocationProps> = ({
  shipping,
  destination,
  distance,
  stations,
}) => {
  return (
    <Col span={8} className={style.card}>
      <Row gutter={[16, 10]}>
        <Col span={24}>
          <strong>{shipping.city}</strong>{" "}
          <span className={style.region}>{shipping.district}</span>
        </Col>
        <Col span={24}>
          <strong>{destination.city}</strong>{" "}
          <span className={style.region}>{destination.district}</span>
        </Col>

        <Col span={24} className={style.distanceWrapper}>
          <span className={style.distance}>Расстояние:</span>{" "}
          <strong> {distance} км</strong>
          {stations ? (
            <span className={style.station}>+{stations} ункта</span>
          ) : null}
        </Col>
      </Row>
    </Col>
  );
};
