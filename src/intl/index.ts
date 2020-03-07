import { flatten } from "./flatten";
import { MessageKeyValue } from "./types";

import en from "./en";
import fr from "./fr";

export const userLocale = navigator.language.toLowerCase().split(/[_-]+/)[0];

const translationMessages: MessageKeyValue = {
  en: flatten(en),
  fr: flatten(fr)
};

export default translationMessages;
