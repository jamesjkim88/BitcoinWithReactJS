import React from "react";
import Navbar from "./Navbar";
import Exchange from "./Exchange";

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
                <Exchange />
            </div>
        );
    }
}
