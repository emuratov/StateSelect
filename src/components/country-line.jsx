import React, {Component} from 'react';


class CountryLine extends Component {

    render() {

        return (
            <div className="items">
                <img className='items-flag' src={this.props.flag} alt=""/>
                <div className="item">{this.props.name}</div>
                <div className="item">{this.props.capital}</div>
                <div className="item">{this.props.nativeName}</div>
                <div className="item">{this.props.counter}</div>
            </div>
        )
    }
}

export default CountryLine;
