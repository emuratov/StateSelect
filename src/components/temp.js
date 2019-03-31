import React, {Component} from 'react';
import DATA from './DATA';
import CountryLine from './country-line';
import HandleSearch from './handleSerach'

// data is http://restcountries.eu/#api-endpoints-code


// class Country extends Component {
let Country = React.createClass({



        countryData: DATA,


        handleChange: function (ev) {
            console.log(ev.target.value);

            // let searchQuery = ev.target.value.toLowerCase();
            // this.setState = this.countryData.filter(function (el) {
            //     let searchValue = el.name.toLowerCase();
            //     return searchValue.indexOf(searchQuery) !==1;
            // });
            // console.log(this.state);
            return ev.target.value;

        },

        render() {

            return (
                <div>
                    <HandleSearch handleChange={this.handleChange}/>

                    {this.countryData.map(function (el) {
                            return (
                                <CountryLine
                                    key={el.numericCode}
                                    name={el.name}
                                    capital={el.capital}
                                    nativeName={el.nativeName}
                                    flag={el.flag}
                                />
                            )
                        }
                    )
                    }
                </div>
            );
        }
    }
);
export default Country;
