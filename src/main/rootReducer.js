import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// Reducers for all pages
import homeReducer from "../containers/home/ReducerHome";
import aboutReduxReducer from "../containers/aboutRedux/ReducerAboutRedux";

// "root reducer"
export default combineReducers({
    router: routerReducer,
    home: homeReducer,
    aboutRedux: aboutReduxReducer,
});
