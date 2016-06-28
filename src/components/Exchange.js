import React from "react";
import Amount from "./Amount";
import Currency from "./Currency";

export default class Exchange extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="container">
                <div className="row shoots">
                    <div className="center col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <form>
                            <Amount />
                            <button className="button" id="btcBox">
                                BTC
                            </button>
                            <button className="button">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}