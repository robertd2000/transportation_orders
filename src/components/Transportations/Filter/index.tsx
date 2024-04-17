import { Button, Card, Col, DatePicker, Input, Row, Typography } from "antd";
import dayjs from "dayjs";
import { Formik, Form } from "formik";
import { ClearFilters } from "../ClearFilters";
import { SwitchFields } from "../Switch";
import { useFilter } from "./hooks/useFilter";
import { transportationSchema } from "../../../schemas/transportations";
import { initialValues } from "./constants";
import style from "./styles/Filter.module.scss";

export const TransportationFilter = () => {
  const { handleSubmit, clearFilters, swapFromAndTo } = useFilter();

  return (
    <Card className={style.card}>
      <Formik
        initialValues={initialValues}
        validationSchema={transportationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
          handleReset,
        }) => (
          <Form>
            <Row gutter={32} align={"top"} className={style.formInner}>
              <Col lg={18} md={24} xs={24}>
                <Row align={"middle"}>
                  <Col span={24}>
                    <Typography.Title level={4} className={style.title}>
                      Поиск грузов
                    </Typography.Title>
                  </Col>
                </Row>
                <Row
                  gutter={16}
                  align={"middle"}
                  className={style.destinations}
                >
                  <Col span={12}>
                    <Input
                      name="from"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.from}
                      placeholder="Откуда"
                    />
                    {errors.from && touched.from ? (
                      <div>{errors.from}</div>
                    ) : null}
                  </Col>

                  <SwitchFields
                    handler={() => {
                      swapFromAndTo({
                        from: values.from,
                        to: values.to,
                        setFieldValue,
                      });
                    }}
                  />

                  <Col span={12}>
                    <Input
                      name="to"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.to}
                      placeholder="Куда"
                    />
                    {errors.to && touched.to ? <div>{errors.to}</div> : null}
                  </Col>
                </Row>

                <ClearFilters
                  handler={() => {
                    clearFilters();
                    handleReset();
                  }}
                />
              </Col>

              <Col lg={6} md={24} xs={24}>
                <Row gutter={16} align={"middle"}>
                  <Col span={24}>
                    <Input
                      name="orderId"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.orderId}
                      placeholder="№ заказа"
                    />
                    {errors.orderId && touched.orderId ? (
                      <div>{errors.orderId}</div>
                    ) : null}
                  </Col>
                </Row>

                <Row
                  gutter={16}
                  align={"middle"}
                  style={{
                    marginTop: "1.2rem",
                  }}
                >
                  <Col span={24}>
                    <DatePicker
                      name="loadingDate"
                      allowClear
                      placeholder="Дата погрузки"
                      onChange={(_, dateString) =>
                        setFieldValue("loadingDate", dateString)
                      }
                      onBlur={handleBlur}
                      value={
                        values.loadingDate ? dayjs(values.loadingDate) : ""
                      }
                      className={style.datepicker}
                    />
                  </Col>
                </Row>

                <Row
                  gutter={16}
                  align={"middle"}
                  style={{
                    marginTop: "1.7rem",
                  }}
                >
                  <Col span={24}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className={style.submit}
                    >
                      ПОИСК
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
