import React from "react";

export default class Amount extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <input className="textBox" id="amount" type="text" />
        )
    }
}