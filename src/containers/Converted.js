import React, {Component} from "react";
import {connect} from "react-redux";

class BitcoinConverted extends Component{

    renderBTCConverted(data){
        console.log("data: ", data);
        console.log("fees: ", data.fees);
        const amount = data.amount;
        const fees = data.fees.map((bitcoin,i) => bitcoin.coinbase.amount);
        return(
            <li key={i}>{amount}, {fees}</li>
        )
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <ul>
                    test: {this.props.bitcoin.map(this.renderBTCConverted)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({bitcoin}){
    return {bitcoin}
}

export default connect(mapStateToProps)(BitcoinConverted);