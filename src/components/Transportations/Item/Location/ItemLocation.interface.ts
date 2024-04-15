import { Adress } from "../../../../types/transportation.interface";

export interface ItemLocationProps {
  shipping: Adress;
  destination: Adress;
  distance: string;
  stations: string;
}
