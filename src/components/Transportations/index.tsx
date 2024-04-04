import { TransportationFilter } from "./Filter";
import { TransportationList } from "./List";
import { TransportationSelect } from "./GridSelect";

export const Transportations = () => {
  return (
    <div>
      <TransportationFilter />

      <TransportationSelect />

      <TransportationList />
    </div>
  );
};
