import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfileList from '../../components/profile-list/profile-list';
import axios from 'axios';
import { connect } from 'react-redux'
import { unSetUser } from '../../store/action-creators';
import './product-profile.css';

class ProductProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userId: ''
         }
    }

    tokenCheck = async () => {
        try {
            const user = await axios.get('/user');
            
            this.setState({
                userId: user.data.id
            })

        } catch (err) {
            this.props.unSetUser()
        }
    }

    async componentDidMount() {
        try {
            await this.tokenCheck();
            const { userId } = this.state;
            const profile = await axios.get(`/profile/${userId}`);
            console.log(profile);

            this.setState({
                products: profile.data
            })
            
        } catch (err) {
            throw err
        }
    }

    editProduct = async (productId) => {
        await this.tokenCheck();
        this.props.history.push(`/edit/${productId}`)
    }

    deleteProduct = async (productId) => {
        try {
            await this.tokenCheck();
            await axios.delete(`/profile/${productId}`);
            const { userId } = this.state;

            const products = await axios.get(`/profile/${userId}`);

            this.setState({
                products: products.data
            });
            this.props.history.push('/profile')

        } catch (err) {
            
        }
    }

    render() { 
        const { products } = this.state;
        console.log(products);

        return ( 
            <Fragment>
                <Link to='/add' className="profile__add">Add comic book</Link>
                {   
                    products && (
                        <ProfileList products={products} editProduct={this.editProduct} deleteProduct={this.deleteProduct} />
                    )
                }
            </Fragment>
         );
    }
}
 
export default connect(null, { unSetUser })(ProductProfile);