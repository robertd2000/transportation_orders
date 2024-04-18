import { transportationFilter } from "../utils/filter";
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
  console.log("filters", filters);

  const data = new Promise((resolve) => {
    const transportationData = transportationFilter(Transportations, filters);

    return resolve(
      transportationData.slice(page * offset, page * offset + offset)
    );
  }) as Promise<Transportation[]>;

  return data;
};
