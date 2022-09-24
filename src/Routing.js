import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from './component/Listing/ListingComponent'
import Details from './component/Details/Details';
import PlaceOrder from './component/Booking/PlaceOrder';
import ViewOrder from './component/Booking/ViewOrder';
import LogIn from './component/Login/Login';
import Register from './component/Login/Register';
import Explore from './Explore';
import Footer from './Footer';


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/listing/:optionId" component={Listing}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route exact path="/viewOrder" component={ViewOrder}/>
                <Route exact path="/logIn" component={LogIn}/>
                <Route exact path="/Register" component={Register}/>
                <Explore/>
                <Footer/>
            </div>
            </BrowserRouter>
          
        )
    }
}

export default Routing;