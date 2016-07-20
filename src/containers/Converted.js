import React, {Component} from "react";
import {connect} from "react-redux";

class BitcoinConverted extends Component{

    renderBTCConverted(data){
        console.log("data: ", data);
        console.log("fees: ", data.fees);
        const amount = data.amount;
        return(
            <p>{amount}</p>
        )
    }

    render(){
        console.log(this.props);
        return(
            <div>
                test: {this.props.bitcoin.map(this.renderBTCConverted)}
            </div>
        )
    }
}

function mapStateToProps({bitcoin}){
    return {bitcoin}
}

export default connect(mapStateToProps)(BitcoinConverted);