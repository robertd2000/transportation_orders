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
  const { handleSubmit } = useFilter();

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
        }) => (
          <Form>
            <Row gutter={16} align={"middle"}>
              <Col span={17}>
                <Row align={"middle"}>
                  <Col span={24}>
                    <Typography.Title level={5}>Поиск грузов</Typography.Title>
                  </Col>
                </Row>
                <Row gutter={16} align={"middle"}>
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
                  <Button
                    type="text"
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </Row>
              </Col>

              <Col span={7}>
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
                        // padding: ".5rem 4rem",
                        width: "100%",
                        backgroundColor: "orange",
                        fontSize: ".8rem",
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
