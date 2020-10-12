import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import './search-list.css';

class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.searchInput = React.createRef();
    }

    searchProduct = (e) => {
        e.preventDefault();

        const searchKey = this.searchInput.current.value.trim();
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
                    <form onSubmit={this.searchProduct} className="search__form">
                        <div className="search__group">
                            <label className="search__label">Search</label>
                            <input type="search" name="search" className="search" ref={this.searchInput} className="search__input" />
                        </div>
                            <input type="submit" value="Submit" className="search__submit" />
                    </form>
                </div>
            </Fragment>
         );
    }
}
 
export default withRouter(SearchList);