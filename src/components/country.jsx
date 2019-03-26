import React, {Component} from 'react';
import DATA from './DATA';
import CountryLine from './country-line';

// data is http://restcountries.eu/#api-endpoints-code


class Country extends Component {

    countryData = DATA;
    capital;

    render() {
        return (
            <div>
                {this.countryData.map(function (el) {
                        return (
                            <CountryLine
                                key={el.numericCode}
                                name={el.name}
                                capital={el.capital}
                                nativeName={el.nativeName}
                            />

                        )
                    }
                )
                }
            </div>

        );
    }
}

export default Country;
