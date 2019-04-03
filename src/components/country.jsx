import React, {Component} from 'react';
import DATA from './DATA';
import CountryLine from './country-line';
import HandleSearch from './handleSerach'

// data is http://restcountries.eu/#api-endpoints-code


class Country extends Component {

    constructor(props) {
        super(props)
        this.state = {listingState: this.countryData};
        this.handleChange = this.handleChange.bind(this);
    }

    countryData = DATA;

    handleChange = function (ev) {
        console.log(ev.target.value);

        let searchQuery = ev.target.value.toLowerCase();
        this.setState({
                listingState: this.countryData.filter(function (el) {
                        let searchValue = el.name.toLowerCase();
                        return searchValue.indexOf(searchQuery) !== -1;
                    }
                )
            }
        );
        console.log(this.state);


        return ev.target.value;
    }

    render() {
        return (
            <div>
                <HandleSearch handleChange={this.handleChange}/>

                <div className="items">
                    <div className="item">Название</div>
                    <div className="item">Столица</div>
                    <div className="item">Имя</div>
                    <div className="item">Флаг</div>
                </div>

                <hr/>

                {this.state.listingState.map(function (el) {
                        return (
                            <div>
                                <CountryLine
                                    key={el.numericCode}
                                    name={el.name}
                                    capital={el.capital}
                                    nativeName={el.nativeName}
                                    flag={el.flag}
                                />
                                <hr/>
                            </div>
                        )
                    }
                )
                }
            </div>
        );
    }
}


export default Country;
