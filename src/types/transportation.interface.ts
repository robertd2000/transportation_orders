export interface Transportation {
  id: string;
  price: string;
  fuelPrice: string;
  distance: string;
  stations: string;
  loadingDate: Date;
  category: string;
  weight: string;
  volume: string;
  email: string;
  birthdate: Date;
  registeredAt: Date;
  destination: Adress;
  shipping: Adress;
}

export interface Adress {
  city: string;
  district: string;
}
