import { Transportations } from "../mock/transportations";
import { TransportationFilter } from "../types/filter.interface";
import { Transportation } from "../types/transportation.interface";

export const getTransportations = async (
  {
    page = 0,
    offset = 20,
  }: {
    offset: number;
    page: number;
  },
  filter?: Partial<TransportationFilter>
): Promise<Transportation[]> => {
  console.log(
    "a",
    page * offset,
    page * offset + offset,
    Transportations.slice(page * offset, page * offset + offset)
  );

  const data = new Promise((resolve) => {
    const transportationData = Transportations.filter((item) => {
      if (filter?.orderId) {
        return item.id.startsWith(filter.orderId);
      }
      if (filter?.from) {
        return item.shipping.city.startsWith(filter.from);
      }
      if (filter?.to) {
        return item.destination.city.startsWith(filter.to);
      }

      return true;
    });
    return resolve(
      transportationData.slice(page * offset, page * offset + offset)
    );
  }) as Promise<Transportation[]>;

  return data;
};
