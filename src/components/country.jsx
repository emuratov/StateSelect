import React, {Component} from 'react';
import DATA from './DATA';
import CountryLine from './country-line';

// data is http://restcountries.eu/#api-endpoints-code


class Country extends Component {

    countryData = DATA;

    render() {
        let count = 0;
        return (
            <div>
                {this.countryData.map(function (el) {
                    count = count +1;
                        return (
                            <CountryLine
                                key={count}
                                counter={count}
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
