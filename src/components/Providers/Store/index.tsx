import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";

type Props = {
  children: ReactNode;
};

export const StoreProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
