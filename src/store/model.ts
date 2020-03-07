import intl, { IntlModel } from "./intl.model";

export interface AppStoreModel {
  intl: IntlModel;
}

const model: AppStoreModel = {
  intl
};

// 👇 export the typed hooks
export default model;
