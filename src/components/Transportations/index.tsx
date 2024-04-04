import { Divider } from "antd";
import { TransportationFilter } from "./Filter";
import { TransportationList } from "./List";

export const Transportations = () => {
  return (
    <div>
      <TransportationFilter />

      <Divider />

      <TransportationList />
    </div>
  );
};
