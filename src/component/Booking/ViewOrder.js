import React, {Component} from 'react';
import axios from 'axios';
import OrderDisplay from './OrderDisplay'
import Header from '../Listing/Header';

const oUrl = "https://xomato-api.herokuapp.com/api/orderList"

class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut'){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
            )
        }
        return(
           <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
           </>
        )
    }

    componentDidMount(){
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;