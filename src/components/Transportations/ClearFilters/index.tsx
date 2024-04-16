import { FC } from "react";
import { ClearFiltersProps } from "./ClearFilters.interface";
import { Col, Row } from "antd";
import style from "./styles/ClearFilters.module.scss";

export const ClearFilters: FC<ClearFiltersProps> = ({ handler }) => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <div className={style.clear}>
          <span onClick={handler}>Сбросить фильтры</span>
        </div>
      </Col>
    </Row>
  );
};
