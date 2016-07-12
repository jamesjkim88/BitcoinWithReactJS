import axios from "axios";

const rootUrl = "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/buy";
const apiKey = "4gN0HY6RLTmshjwm5OsfyaRS5PBLp1yxVacjsnlOdcza7YSwGS";

export const FETCH_BITCOIN = "FETCH_BITCOIN";

export function fetchBitcoin(btc) {
    const url = `${rootUrl}?qty=${btc}&mashape-key=${apiKey}`;
    const request = axios.get(url);
    return{
        type: FETCH_BITCOIN,
        payload: request
    };
}