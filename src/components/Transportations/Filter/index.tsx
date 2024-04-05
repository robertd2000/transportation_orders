import { Button, Card, Col, DatePicker, Input, Row, Typography } from "antd";
import dayjs from "dayjs";
import { Formik, Form } from "formik";
import { object, string, date } from "yup";
import { useFilter } from "./hooks/useFilter";
import { initialValues } from "./constants";

let transportationSchema = object({
  from: string(),
  to: string(),
  orderId: string(),
  loadingDate: date(),
});

export const TransportationFilter = () => {
  const { handleSubmit, clearFilters } = useFilter();

  return (
    <Card
      style={{
        height: 269,
        width: "100%",
      }}
    >
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
            <Row
              gutter={32}
              align={"top"}
              style={{
                marginTop: ".5rem",
              }}
            >
              <Col span={18}>
                <Row align={"middle"}>
                  <Col span={24}>
                    <Typography.Title
                      level={4}
                      style={{
                        margin: 0,
                        fontSize: "20px",
                      }}
                    >
                      Поиск грузов
                    </Typography.Title>
                  </Col>
                </Row>
                <Row
                  gutter={16}
                  align={"middle"}
                  style={{
                    marginTop: "2.65rem",
                  }}
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

                <Row gutter={16}>
                  <Col span={24}>
                    <div
                      onClick={() => {
                        clearFilters();
                        handleReset();
                      }}
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
                      Сбросить фильтры
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col span={6}>
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
                      size="large"
                      placeholder="Дата погрузки"
                      onChange={(_, dateString) =>
                        setFieldValue("loadingDate", dateString)
                      }
                      onBlur={handleBlur}
                      value={
                        values.loadingDate ? dayjs(values.loadingDate) : ""
                      }
                      style={{
                        width: "100%",
                        paddingBlock: 12,
                        borderRadius: 8,
                      }}
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
                      style={{
                        width: "100%",
                        backgroundColor: "#FF9A19",
                        fontSize: "16px",
                        height: "56px",
                        fontWeight: 700,
                      }}
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
