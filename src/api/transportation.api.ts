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
  console.log(
    "a",
    page * offset,
    page * offset + offset,
    Transportations.slice(page * offset, page * offset + offset)
  );

  const data = new Promise((resolve) => {
    const transportationData = Transportations.filter((item) => {
      if (filters?.orderId) {
        return item.id.startsWith(filters.orderId);
      }
      if (filters?.from) {
        return item.shipping.city.startsWith(filters.from);
      }
      if (filters?.to) {
        return item.destination.city.startsWith(filters.to);
      }

      return true;
    });
    return resolve(
      transportationData.slice(page * offset, page * offset + offset)
    );
  }) as Promise<Transportation[]>;

  return data;
};
