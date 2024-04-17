import { Col, Row } from "antd";
import { FC } from "react";
import { getStation } from "../../../../utils/station";
import { ItemLocationProps } from "./ItemLocation.interface";
import style from "./styles/ItemLocation.module.scss";

export const ItemLocation: FC<ItemLocationProps> = ({
  shipping,
  destination,
  distance,
  stations,
}) => {
  return (
    <Col lg={8} md={24} xs={24} className={style.card}>
      <Row gutter={[16, 6]}>
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
            <span className={style.station}>+{getStation(stations)}</span>
          ) : null}
        </Col>
      </Row>
    </Col>
  );
};
