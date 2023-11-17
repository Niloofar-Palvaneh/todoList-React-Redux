import { legacy_createStore } from "redux";
import reduser from "./Todos";

const store = legacy_createStore(reduser)

export default store