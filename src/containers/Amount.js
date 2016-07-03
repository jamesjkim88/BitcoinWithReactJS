import React from "react";
import AmountActions from "../actions/AmountActions";

export default class Amount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            currency: "USD"
        }
    }

    onInputChange(amount){
        this.setState({amount});
        console.log(amount);
    }
    
    // ajaxCall(amount, currency){
    //     this.setState({amount});
    //     console.log(amount);
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/spot_rate?currency=USD&mashape-key=4gN0HY6RLTmshjwm5OsfyaRS5PBLp1yxVacjsnlOdcza7YSwGS');
    //     xhr.addEventListener('readystatechange', function () {
    //             if (xhr.readyState === 4) {
    //                 console.log("data: ", JSON.parse(xhr.responseText));
    //                 var data = JSON.parse(xhr.responseText);
    //                 var total = data.amount * amount;
    //                 console.log(total.toFixed(2));
    //             }
    //             });
    //         xhr.send();
    //         console.log('Made the call');
    // }

    render(){
        return(
            <input className="textBox" id="amount" type="text" value={this.state.amount} onChange={(evt) => this.onInputChange(evt.target.value)} />
        )
    }
}