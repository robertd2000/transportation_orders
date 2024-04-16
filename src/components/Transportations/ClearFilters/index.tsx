import { FC } from "react";
import { ClearFiltersProps } from "./ClearFilters.interface";
import { Col, Row } from "antd";

export const ClearFilters: FC<ClearFiltersProps> = ({ handler }) => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <div
          style={{
            textDecoration: "underline",
            marginTop: "2.5rem",
            verticalAlign: "center",
            textAlign: "end",
            cursor: "pointer",
            fontSize: "16px",
            color: "#818281",
            fontWeight: 400,
          }}
        >
          <span onClick={handler}>Сбросить фильтры</span>
        </div>
      </Col>
    </Row>
  );
};
