import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchBitcoin} from "../actions/index"
import Select from "react-select";

var options = [
    { value: 'one', label: 'USD' },
    { value: 'two', label: 'KRW' }
];

class Amount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0
        }
    }

    onInputChange(amount) {
        this.setState({amount});
        console.log(amount);
    }
    onAmountEntered(evt){
        evt.preventDefault();
        this.props.fetchBitcoin(this.state.amount);
        this.setState({amount: " "});
    }
    render(){
        const center = {
            margin: "0 auto"
        }
        return(
            <form onSubmit={this.onAmountEntered.bind(this)} className="input-group" style={center}>
                <input className="textBox" id="amount" type="text" value={this.state.amount} onChange={(evt) => this.onInputChange(evt.target.value)} />
                <Select
                    name="form-field-name"
                    value="one"
                    options={options}
                />
                <button className="btn btn-primary">Search</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchBitcoin}, dispatch);
};

export default connect(null, mapDispatchToProps)(Amount);