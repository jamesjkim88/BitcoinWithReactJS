import {combineReducer} from "redux";
import BitcoinReducer from "./reducerBitcoin";

const rootReducer = combineReducer({
    bitcoin: BitcoinReducer
})

export default rootReducer