import React, {Component} from "react";
import Select from "react-select";

var options = [
    { value: 'one', label: 'USD' },
    { value: 'two', label: 'KRW' }
];

function logChange(val) {
    console.log(val);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/spot_rate?currency=' + val.label + '&mashape-key=4gN0HY6RLTmshjwm5OsfyaRS5PBLp1yxVacjsnlOdcza7YSwGS');
    xhr.addEventListener('readystatechange', function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            console.log("data: ", JSON.parse(xhr.responseText));
        }
    });
    xhr.send();
    console.log('Made the call');
}

export default class Currency extends Component{
    render(){
        return(
            <Select
                name="form-field-name"
                value="one"
                options={options}
                onChange={logChange}
            />
        )
    }
}

