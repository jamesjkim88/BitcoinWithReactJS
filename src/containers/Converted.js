import React, {Component} from "react";
import {connect} from "react-redux";

class BitcoinConverted extends Component{

    render(){
        var value = this.props.value;
        console.log("value: ", value);
        //calculating the amount
        var convert = function(data){
            console.log("data: ", data);
            const amount = data.amount * value;
            const currency = data.currency;
            const key = new Date().getTime();
            return(
                <p key={key}>{currency}: {amount} BTC</p>
            )
        };
        return(
            <div>
                {this.props.bitcoin.map(convert)}
            </div>
        )
    }
}

function mapStateToProps({bitcoin}){
    return {bitcoin}
}

export default connect(mapStateToProps)(BitcoinConverted);