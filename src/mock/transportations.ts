import { Transportation } from "../types/transportation.interface";
import { faker } from "../utils/faker";

export function createRandomTransportation(): Transportation {
  return {
    id: faker.string.uuid(),
    price: faker.commerce.price({
      min: 10000,
      max: 1000000,
    }),
    fuelPrice: faker.commerce.price(),
    distance: (Math.random() * 10000).toFixed(2),
    stations: (Math.random() * 10).toFixed(0),
    loadingDate: faker.date.anytime(),
    category: "Стройматериалы",
    weight: (Math.random() * 10000).toFixed(2),
    volume: (Math.random() * 100).toFixed(2),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    destination: {
      city: faker.location.city(),
      district: faker.location.state(),
    },
    shipping: {
      city: faker.location.city(),
      district: faker.location.state(),
    },
  };
}

export const Transportations: Transportation[] = faker.helpers.multiple(
  createRandomTransportation,
  {
    count: 10000,
  }
);
