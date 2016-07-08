import React, {Component} from "react";
import {connect} from "react-redux";

class BitcoinConverted extends Component{

    renderBTCConverted(data){
        console.log("data: ", data);
    }

    render(){
        return(
            <h1>{this.renderBTCConverted.bind(this)}</h1>
        )
    }
}

function mapStateToProps({bitcoin}){
    return {bitcoin}
}

export default connect(mapStateToProps)(BitcoinConverted);