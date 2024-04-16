import { FC } from "react";
import { Col, Row } from "antd";
import dayjs from "dayjs";
import { ItemMainInfoProps } from "./ItemMainInfo.intrface";
import style from "./styles/MainInfo.module.scss";

export const ItemMainInfo: FC<ItemMainInfoProps> = ({ item }) => {
  return (
    <Col span={12} className={style.card}>
      <Row
        justify={"space-between"}
        gutter={[16, 10]}
        className={style.cardWrapper}
      >
        <Col span={12}>{item.category}</Col>
        <Col span={12} className={style.id}>
          №{item.id.slice(0, 20)}
        </Col>
        <Col span={12} className={style.grey}>
          {item.weight} т. / {item.volume} м3
        </Col>
        <Col span={12} className={`${style.grey} ${style.tent}`}>
          Тент / полная
        </Col>
        <Col
          span={24}
          style={{
            fontSize: 16,
          }}
        >
          <span className={style.grey}>Погрузка: </span>
          {dayjs(item.loadingDate).locale("ru").format("D MMMM, YYYY hh:mm")}
        </Col>
      </Row>
    </Col>
  );
};
