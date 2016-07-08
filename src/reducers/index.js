import {combineReducers} from 'redux';
import BitcoinReducer from "./reducerBitcoin";

const rootReducer = combineReducers({
    bitcoin: BitcoinReducer
});

export default rootReducer