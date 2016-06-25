import React, {Component} from "react";

export default class Currency extends Component{
    render(){
        return(
            <select id="currencyBox">
                <option disabled selected value="">Select Currency</option>
            </select>
        )
    }
}