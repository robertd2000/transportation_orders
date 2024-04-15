import { Col, Row } from "antd";
import { FC } from "react";
import { ItemLocationProps } from "./ItemLocation.interface";

export const ItemLocation: FC<ItemLocationProps> = ({
  shipping,
  destination,
  distance,
  stations,
}) => {
  return (
    <Col
      span={8}
      style={{
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <Row gutter={[16, 10]}>
        <Col span={24}>
          <strong
            style={{
              fontWeight: 500,
            }}
          >
            {shipping.city}
          </strong>{" "}
          <span
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: "#818281",
            }}
          >
            {shipping.district}
          </span>
        </Col>
        <Col span={24}>
          <b
            style={{
              fontWeight: 500,
            }}
          >
            {destination.city}
          </b>{" "}
          <span
            style={{
              fontWeight: 400,
              fontSize: 18,
              color: "#818281",
            }}
          >
            {destination.district}
          </span>
        </Col>
        <Col
          span={24}
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          <span
            style={{
              fontWeight: 400,
              fontSize: 16,
              color: "#818281",
            }}
          >
            Расстояние:
          </span>{" "}
          <b
            style={{
              fontWeight: 500,
            }}
          >
            {" "}
            {distance} км
          </b>
          {stations ? (
            <span
              style={{
                marginLeft: "1rem",
                color: "#017B59",
              }}
            >
              +{stations} ункта
            </span>
          ) : null}
        </Col>
      </Row>
    </Col>
  );
};
