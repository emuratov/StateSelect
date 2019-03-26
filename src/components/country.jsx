import React, { Component } from 'react';
import DATA from './DATA'
// data is http://restcountries.eu/#api-endpoints-code


class Country extends Component {

    countryData = DATA;

    render() {
        return (
           <div>
               {console.log(this.countryData[1].name)};
           </div>
        );
    }
}

export default Country;
