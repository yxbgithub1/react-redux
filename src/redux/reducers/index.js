import { combineReducers } from "redux";

import login from "./login";

//组合所有reduce
const reduce = combineReducers({
    login
});

export default reduce;
