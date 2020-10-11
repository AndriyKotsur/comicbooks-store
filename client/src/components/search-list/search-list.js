import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import './search-list.css';

class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    searchProduct = (e) => {
        e.preventDefault();

        const searchKey = this.refs.search.value.trim();
        console.log(searchKey);

        if(searchKey === '') {
            return false
        } else {
            this.props.history.push(`/search?search=${searchKey}`)
        }
    }

    render() { 
        return ( 
            <Fragment>
                <div className="search__inner">
                    <form onSubmit={this.searchProduct} className="form">
                        <div className="form-group">
                            <label className="form-label">Search</label>
                            <input type="search" name="search" className="search" ref="search" className="form-input" />
                        </div>
                            <input type="submit" value="Submit" className="form-submit" />
                    </form>
                </div>
            </Fragment>
         );
    }
}
 
export default withRouter(SearchList);