import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './product-add.css';

class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            price: null,
            description: '',
            file: null
         }

        this.onChange.bind(this);
        this.onImageChange.bind(this);
        this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onImageChange = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('price', this.state.price);
        formData.append('description', this.state.description);
        formData.append('image', this.state.file);

        try {
            const response = await axios.post('http://localhost:5000/profile/product/add', formData, config);
            this.props.history.push('/profile');

        } catch (err) {
            throw err
        }
    }
    
    render() { 
        return ( 
            <Fragment>
                <div className="product__add">
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input type="text" name="title" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Price</label>
                            <input type="number" name="price" minLength="1" maxLength="15" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea onChange={this.onChange} name="description" className="form-textarea"></textarea>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Image</label>
                            <input onChange={this.onImageChange} type="file" name="image" className="form-input" />
                        </div>
                        <input type="submit" value="Submit" className="form-submit"/>
                    </form>
                </div>
            </Fragment>
         );
    }
}
 
export default ProductAdd;