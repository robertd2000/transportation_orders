import { Row, Select } from "antd";
import { selectOptions } from "./constants";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setGrid } from "../../../redux/transportation/slice";

export const TransportationSelect = () => {
  const { grid } = useAppSelector((state) => state.transportationReducer);

  const dispatch = useAppDispatch();

  const onSelect = (e: string) => {
    dispatch(setGrid(e));
  };

  return (
    <Row justify={"end"}>
      <Select
        value={grid}
        style={{ width: 60, marginTop: ".5rem" }}
        options={selectOptions}
        onChange={onSelect}
      />
    </Row>
  );
};
