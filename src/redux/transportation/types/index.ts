export interface InitialState {
  grid: "list" | "card";
  filters: Filter;
}

export interface Filter {
  loadingDate?: number;
  from?: string;
  to?: string;
  orderId?: string;
}
