import { Transportations } from "../mock/transportations";
import { TransportationFilter } from "../types/filter.interface";
import { Transportation } from "../types/transportation.interface";

export const getTransportations = async ({
  page = 0,
  offset = 20,
  filters,
}: {
  offset?: number;
  page?: number;
  filters?: Partial<TransportationFilter>;
}): Promise<Transportation[]> => {
  const data = new Promise((resolve) => {
    const transportationData = Transportations.filter((item) => {
      let isOk = true;
      if (filters?.orderId) {
        if (isOk) isOk = item.id.startsWith(filters.orderId);
      }
      if (filters?.from) {
        if (isOk) isOk = item.shipping.city.startsWith(filters.from);
      }
      if (filters?.to) {
        if (isOk) isOk = item.destination.city.startsWith(filters.to);
      }
      if (filters?.loadingDate) {
        if (isOk) isOk = item.loadingDate.valueOf() <= filters?.loadingDate;
      }

      return isOk;
    });

    return resolve(
      transportationData.slice(page * offset, page * offset + offset)
    );
  }) as Promise<Transportation[]>;

  return data;
};
