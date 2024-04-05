export interface InitialState {
  grid: "list" | "card";
  filters: Filter;
}

export interface Filter {
  loadingData?: number;
  from?: string;
  to?: string;
  orderId?: string;
}
