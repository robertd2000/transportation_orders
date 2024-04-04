import { FC } from "react";
import { TransportationItemProps } from "./TransportationItem.interface";
import { Card, Col, Divider, List, Row } from "antd";
import dayjs from "dayjs";

export const TransportationItem: FC<TransportationItemProps> = ({ item }) => {
  return (
    <List.Item key={item.id}>
      <Card style={{ width: "100%" }}>
        <Row gutter={16}>
          <Col span={8}>
            <div>
              <b>{item.shipping.city}</b> {item.shipping.district}
            </div>

            <div>
              <b>{item.destination.city}</b> {item.destination.district}
            </div>

            <div>
              Расстояние: <b>{item.distance} км</b>
            </div>
          </Col>

          <Divider type="vertical" />

          <Col span={12}>
            <Row justify={"space-between"}>
              <Col span={12}>{item.category}</Col>
              <Col
                span={12}
                style={{
                  textAlign: "right",
                }}
              >
                # {item.id.slice(0, 20)}
              </Col>
            </Row>
            <Row justify={"space-between"}>
              <Col span={12}>
                {item.weight} т. / {item.volume} м3
              </Col>
              <Col
                span={12}
                style={{
                  textAlign: "right",
                }}
              >
                Тент / полная
              </Col>
            </Row>

            <Row>Погрузка: {dayjs(item.loadingDate).format()}</Row>
          </Col>

          <Divider type="vertical" />
        </Row>
      </Card>
    </List.Item>
  );
};
