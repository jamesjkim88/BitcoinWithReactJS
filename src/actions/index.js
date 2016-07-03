import axios from "axios";
import config from "../../config.json";

const rootUrl = config.rootUrl;
const apiKey = config.apiKey;

const FETCH_BITCOIN = "FETCH_BITCOIN";

export function fetchBitcoin(currency) {
    const url = `${rootUrl}?currency=${currency}&mashape-key=${apiKey}`;
    const request = axios.get(url);
    return{
        type: FETCH_BITCOIN,
        payload: request
    };
};