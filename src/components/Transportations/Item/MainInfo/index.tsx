import { FC } from "react";
import { Col, Row } from "antd";
import dayjs from "dayjs";
import { ItemMainInfoProps } from "./ItemMainInfo.intrface";

export const ItemMainInfo: FC<ItemMainInfoProps> = ({ item }) => {
  return (
    <Col
      span={12}
      style={{
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <Row
        justify={"space-between"}
        gutter={16}
        style={{
          margin: "0 .5rem",
        }}
      >
        <Col span={12}>{item.category}</Col>
        <Col
          span={12}
          style={{
            textAlign: "right",
            color: "#818281",
          }}
        >
          №{item.id.slice(0, 20)}
        </Col>
        <Col
          span={12}
          style={{
            fontWeight: 400,
            fontSize: 16,
            color: "#818281",
          }}
        >
          {item.weight} т. / {item.volume} м3
        </Col>
        <Col
          span={12}
          style={{
            textAlign: "right",
            color: "#818281",
            fontSize: 16,
          }}
        >
          Тент / полная
        </Col>
        <Col
          span={24}
          style={{
            fontSize: 16,
          }}
        >
          <span
            style={{
              fontWeight: 400,
              color: "#818281",
            }}
          >
            Погрузка:{" "}
          </span>
          {dayjs(item.loadingDate).locale("ru").format("D MMMM, YYYY hh:mm")}
        </Col>
      </Row>
    </Col>
  );
};
