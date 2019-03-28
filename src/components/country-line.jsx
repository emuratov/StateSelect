import React, {Component} from 'react';


class CountryLine extends Component {

    render() {

        return (
            <div className="items">
                <div className="item">{this.props.name}</div>
                <div className="item">{this.props.capital}</div>
                <div className="item">{this.props.nativeName}</div>
                <div className="item">{this.props.counter}</div>
                <img className='items-flag' src={this.props.flag} alt=""/>
            </div>
        )
    }
}

export default CountryLine;
