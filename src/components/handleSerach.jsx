import React, {Component} from 'react';


class HandleSearch extends Component {

    render() {


        return (
            <div>
                <input type="text" className="search-input" onChange={handleChange}/>
            </div>
        )
    }
}


function handleChange(ev) {
    console.log(ev.target.value);
    return ev.target.value;
}

export default HandleSearch;
