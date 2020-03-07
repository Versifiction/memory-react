import React, { FunctionComponent, PropsWithChildren } from "react";
import IntlProvider from "./intl.provider";
import StoreProvider from "./store.provider";

const Providers: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <StoreProvider>
      <IntlProvider>{children}</IntlProvider>
    </StoreProvider>
  );
};

export default Providers;
