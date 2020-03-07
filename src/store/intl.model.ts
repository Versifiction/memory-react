import { Action, action, persist } from "easy-peasy";
import translationMessages from "../intl";
import { MessageKeyValue } from "../intl/types";

export interface IntlModel {
  locale: string;
  messages: MessageKeyValue;
  update: Action<IntlModel, string>;
  languages: Array<string>;
}

let defaultLocale = "en";
if (window.navigator.language !== ("fr-FR" || "en-EN")) {
  defaultLocale = "en";
}
if (window.navigator.language === "fr-FR") {
  defaultLocale = "fr";
}

const intl: IntlModel = {
  locale: defaultLocale,
  messages: translationMessages[defaultLocale] as any,
  update: action((state, payload) => {
    state.locale = payload;
    state.messages = translationMessages[payload] as any;
  }),
  languages: ["en", "fr"]
};

export default persist(intl);
