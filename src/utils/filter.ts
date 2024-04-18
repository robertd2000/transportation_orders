import { TransportationFilter } from "../types/filter.interface";
import { Transportation } from "../types/transportation.interface";

export const transportationFilter = (
  data: Transportation[],
  filters?: Partial<TransportationFilter>
) => {
  const isOrderId = (item: Transportation) => {
    if (filters?.orderId) {
      return item.id.startsWith(filters.orderId);
    } else {
      return true;
    }
  };

  const isFrom = (item: Transportation) => {
    if (filters?.from) {
      return item.shipping.city.startsWith(filters.from);
    } else {
      return true;
    }
  };

  const isTo = (item: Transportation) => {
    if (filters?.to) {
      return item.destination.city.startsWith(filters.to);
    } else {
      return true;
    }
  };

  const isDate = (item: Transportation) => {
    if (filters?.loadingDate) {
      return item.loadingDate.valueOf() <= filters?.loadingDate;
    } else {
      return true;
    }
  };

  return data.filter(isOrderId).filter(isFrom).filter(isTo).filter(isDate);
};
