import { object, string, date } from "yup";

export const transportationSchema = object({
  from: string(),
  to: string(),
  orderId: string(),
  loadingDate: date(),
});
