import { List } from "antd";
import VirtualList from "rc-virtual-list";
import { TransportationItem } from "../Item";
import { useTransportationsList } from "./hooks/useTransportationsList";
import { HEIGHT } from "../../../constants";

export const TransportationList = () => {
  const { data, onScroll } = useTransportationsList();

  return (
    <List split={false}>
      <VirtualList
        data={data}
        height={HEIGHT}
        itemHeight={116}
        itemKey="id"
        onScroll={onScroll}
      >
        {(item) => <TransportationItem item={item} key={item.id} />}
      </VirtualList>
    </List>
  );
};
