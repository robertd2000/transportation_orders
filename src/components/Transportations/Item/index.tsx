import { FC } from "react";
import { Card, List, Row } from "antd";
import { ItemLocation } from "./Location";
import { ItemMainInfo } from "./MainInfo";
import { ItemPrice } from "./Price";
import { TransportationItemProps } from "./TransportationItem.interface";

export const TransportationItem: FC<TransportationItemProps> = ({ item }) => {
  return (
    <List.Item key={item.id}>
      <Card style={{ width: "100%" }}>
        <Row gutter={16} align={"middle"}>
          <ItemLocation
            shipping={item.shipping}
            destination={item.destination}
            distance={item.distance}
            stations={item.stations}
          />

          <ItemMainInfo item={item} />

          <ItemPrice price={item.price} fuelPrice={item.fuelPrice} />
        </Row>
      </Card>
    </List.Item>
  );
};
