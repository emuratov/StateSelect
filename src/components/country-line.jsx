import React, {Component} from 'react';


class CountryLine extends Component {


    render() {

        return (
            <div key={this.props.key} className="items">
                <div className="item">{this.props.name}</div>
                <div className="item">{this.props.capital}</div>
                <div className="item">{this.props.nativeName}</div>
            </div>
        )
    }
}

export default CountryLine;
