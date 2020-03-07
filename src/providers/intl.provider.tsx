import React, { FunctionComponent, PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useStoreState } from "../store/hooks";

const IntlReduxProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children
}) => {
  const locale = useStoreState(state => state.intl.locale);
  const messages = useStoreState(state => state.intl.messages);

  return (
    <IntlProvider
      locale={locale}
      messages={messages as any}
      children={children}
    />
  );
};

export default IntlReduxProvider;
