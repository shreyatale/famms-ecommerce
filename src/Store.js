import Mainreducers from "./Redux/Reducer/Mainreducers";
import {createStore} from "redux"
const store=createStore(Mainreducers)
export default store