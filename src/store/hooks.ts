import { createTypedHooks } from "easy-peasy";

import { AppStoreModel } from "./model";

const typedHooks = createTypedHooks<AppStoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
