import { createStore, combineReducers } from "redux";
import { timeReducer } from "./reducers/timeReducer";

const reducers = combineReducers({
	time: timeReducer
});

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
