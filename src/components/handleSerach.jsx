import React, {Component} from 'react';


class HandleSearch extends Component {

    render() {

        return (
            <div>
                <input type="text" className="search-input" onChange={this.props.handleChange}/>
            </div>
        )
    }
}

export default HandleSearch;
