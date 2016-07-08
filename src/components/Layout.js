import React from "react";
import Navbar from "./Navbar";
import Amount from "../containers/Amount";
import Converted from "../containers/Converted";

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0
        }
    }
    render(){
        return(
            <div>
                <Navbar />
                <Amount />
                <Converted />
            </div>
        );
    }
}
