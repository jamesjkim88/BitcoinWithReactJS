import {FETCH_BITCOIN} from "../actions/index";

export default function(state = [], action){
    switch(action.type){
        case FETCH_BITCOIN:
            return state.concat([action.payload.data])
    }
    return state;
};