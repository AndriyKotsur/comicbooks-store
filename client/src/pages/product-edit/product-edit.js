import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './product-edit.css';

class ProductEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            isError: ''
        }

         this.titleInput = React.createRef();
         this.priceInput = React.createRef();
         this.descriptionInput = React.createRef();
    }

    async componentDidMount() {
        const productId = this.props.match.params.productId;

        try {
            const product = await axios.get(`/profile/product/${productId}`);
            
            this.titleInput.current.value = product.data.title;
            this.priceInput.current.value = product.data.price;
            this.descriptionInput.current.value = product.data.description;
            
        } catch (err) {
            this.setState({
                isError: err.response.data
            })
        }
    }

    onImageChange = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('title', this.titleInput.current.value);
        formData.append('price', this.priceInput.current.value);
        formData.append('description', this.descriptionInput.current.value);
        formData.append('image', this.state.file);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        try {
            const productId = this.props.match.params.productId;
            
            await axios.put(`/profile/product/edit/${productId}`, formData, config);
            this.props.history.push('/profile');

        } catch (err) {
            this.setState({
                isError: err.response.data
            })
        }
    }

    render() {
        const { isError } = this.state;

        return ( 
            <Fragment>
                <div className="product__edit">
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input ref={this.titleInput} type="text" name="title" className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Price</label>
                            <input ref={this.priceInput} type="number" name="price" minLength="1" maxLength="15" className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea ref={this.descriptionInput} name="description" className="form-textarea"></textarea>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Image</label>
                            <input onChange={this.onImageChange} type="file" name="image" className="form-input" required />
                        </div>
                        {
                            isError && (
                            <p className="form-error">{isError.message}</p>
                            )
                        }
                        <input type="submit" value="Submit" className="form-submit"/>
                    </form>
                </div>
            </Fragment>
         );
    }
}
 
export default ProductEdit;