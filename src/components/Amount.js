import React from "react";

export default class Amount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0
        }
    }

    onInputChange(amount){
        this.setState({amount});
        console.log(amount);
    }

    render(){
        return(
            <input className="textBox" id="amount" type="text" value={this.state.amount} onChange={(evt) => this.onInputChange(evt.target.value)} />
        )
    }
}