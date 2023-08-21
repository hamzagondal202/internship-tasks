// import { createStore } from "react-redux";
// import { createStoreHook } from "react-redux";
import rootReducers from "./reducers";

const store = createStoreHook(rootReducers);

export default store;
