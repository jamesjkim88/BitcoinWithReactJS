import React from "react";
import Navbar from "./Navbar";
import Amount from "../containers/Amount";

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
            </div>
        );
    }
}
