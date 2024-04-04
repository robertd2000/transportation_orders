import { Row, Select } from "antd";
import { selectOptions } from "./constants";

export const TransportationSelect = () => {
  return (
    <Row justify={"end"}>
      <Select
        defaultValue={selectOptions?.[0]}
        style={{ width: 60, marginTop: ".5rem" }}
        options={selectOptions}
      />
    </Row>
  );
};
