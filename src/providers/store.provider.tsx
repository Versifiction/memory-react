import React, { FunctionComponent, PropsWithChildren } from "react";
import { StoreProvider } from "easy-peasy";

import store from "../store";

const Providers: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default Providers;
