import { List } from "antd";
import VirtualList from "rc-virtual-list";
import { TransportationItem } from "../Item";
import { useTransportationsList } from "./hooks/useTransportationsList";
// import { HEIGHT } from "../../../constants";
import style from "./styles/TransportationList.module.scss";

export const TransportationList = () => {
  const { data, ref, height, onScroll } = useTransportationsList();

  return (
    <div ref={ref} className={style.listWrapper}>
      <List split={false}>
        <VirtualList
          data={data}
          height={height}
          itemHeight={116}
          itemKey="id"
          onScroll={onScroll}
        >
          {(item) => <TransportationItem item={item} />}
        </VirtualList>
      </List>
    </div>
  );
};
