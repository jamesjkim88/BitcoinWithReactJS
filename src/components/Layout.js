import React from "react";
import Navbar from "./Navbar";
import Exchange from "./Exchange";

export default class Layout extends React.Component{
    constructor(){
        super();
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
