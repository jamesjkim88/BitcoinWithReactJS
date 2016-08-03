import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchBitcoin} from "../actions/index"
import Select from "react-select";
import Converted from "../containers/Converted";

class Amount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            currency: [
                {value: 'one', label: 'USD'},
                {value: 'two', label: 'KRW'}
            ]
        }
    }

    onInputChange(amount) {
        console.log(amount);
        this.setState({amount});
    }
    onAmountEntered(evt){
        console.log(evt.label);
        this.props.fetchBitcoin(evt.label);
    }
    render(){
        var options = [
            { value: 'one', label: 'USD' },
            { value: 'two', label: 'KRW' }
        ];
        const center = {
            margin: "0 auto"
        };
        console.log("options: ", options);
        console.log("state.curr: ", this.state.currency);
        return(
            <div>
                <form className="input-group" style={center} autoComplete="off">
                    <input className="textBox" id="amount" value={this.state.amount} type="text" onChange={(evt) => this.onInputChange(evt.target.value)} />
                    <Select
                        name="form-field-name"
                        label="USD" //change to this.state.currency
                        options={this.state.currency}
                        onChange={this.onAmountEntered.bind(this)}
                    />
                </form>
                <div>
                    <Converted
                        value={this.state.amount}
                    />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchBitcoin}, dispatch);
};

export default connect(null, mapDispatchToProps)(Amount);