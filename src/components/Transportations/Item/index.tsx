import { FC } from "react";
import { Card, Col, List, Row, Typography } from "antd";
import dayjs from "dayjs";
import { TransportationItemProps } from "./TransportationItem.interface";

export const TransportationItem: FC<TransportationItemProps> = ({ item }) => {
  return (
    <List.Item key={item.id}>
      <Card style={{ width: "100%" }}>
        <Row gutter={16} align={"middle"}>
          <Col span={8}>
            <Row gutter={16}>
              <Col span={24}>
                <b>{item.shipping.city}</b>{" "}
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#818281",
                  }}
                >
                  {item.shipping.district}
                </span>
              </Col>
              <Col span={24}>
                <b>{item.destination.city}</b>{" "}
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#818281",
                  }}
                >
                  {item.destination.district}
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
                <b>{item.distance} км</b>
                {item.stations ? (
                  <span
                    style={{
                      marginLeft: "1rem",
                      color: "#017B59",
                    }}
                  >
                    +{item.stations} ункта
                  </span>
                ) : null}
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Row justify={"space-between"} gutter={16}>
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
                {dayjs(item.loadingDate)
                  .locale("ru")
                  .format("D MMMM, YYYY hh:mm")}
              </Col>
            </Row>
          </Col>

          <Col span={4}>
            <Typography.Title level={5}>{item.price} ₽</Typography.Title>
            ГСМ: 5 500 ₽
          </Col>
        </Row>
      </Card>
    </List.Item>
  );
};
