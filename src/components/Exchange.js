import React from "react";

export default class Exchange extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="container">
                <div className="row shoots">
                    <div className="center col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input className="textBox" id="amount" type="text" />
                            <button className="button" id="btcBox">
                                BTC
                            </button>

                            <form>
                                <select id="currencyBox">
                                    <option disabled selected value="">Select Currency</option>
                                </select>
                            </form>
                            <button className="button">Search</button>
                    </div>
                </div>
            </div>
        )
    }
}