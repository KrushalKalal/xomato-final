import React,{Component} from 'react';
import './Details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MenuDisplay from './MenuDisplay'
import Header from '../Listing/Header';


const RestaurantUrl= "https://xomato-api.herokuapp.com/api/details"
const MenuUrl = "https://xomato-api.herokuapp.com/api/menu"


class Details extends Component {

    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            optionId:sessionStorage.getItem('optionId'),
            userItem:''
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        let {details} = this.state
        console.log(details)
        return(
            <>  
                <Header/>
                <div id="mainContent">
                    <div className="imgDiv">
                        <img src={details.restaurant_img} alt="image"/>
                    </div>
                    <div className="contentDiv">
                        <h2>{details.restaurant_name}</h2>
                        <span>{details.counter} Customers Say {details.rating} </span>
                        <h3><del>Old Price: Rs.1000</del></h3>
                        <h3>New Price: Rs.{details.price}</h3>
                        <h3>Best Taste in {details.address} </h3>
                        <div class="feature_container">
                            <figure>
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" class="featureIcon"/>
                                <figcaption>Pure Veg</figcaption>
                            </figure>
                            <figure>
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" class="featureIcon"/>
                                <figcaption>Fully Senatized</figcaption>
                            </figure>
                        </div>
                        <Tabs>
                            <TabList>
                                <Tab>About Us</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>{details.restaurant_name}</h2>
                                <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h3>Phone: {details.contact}</h3>
                            </TabPanel>
                         
                        </Tabs>
                        <div>
                            <Link to={`/listing/${this.state.optionId}`} className="btn btn-danger">Back</Link> &nbsp;
                            <button className="btn btn-success"  onClick={this.proceed}>Proceed</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 menu_data">
                    <MenuDisplay menudata={this.state.menuList}
                    finalOrder={(data)=>{this.addToCart(data)}}
                    />
               </div>
            </>
        )
    }

    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${RestaurantUrl}/${restId}`)
        let menudata = await axios.get(`${MenuUrl}/${restId}`)
        this.setState({details:response.data[0],menuList:menudata.data})
    }
}

export default Details;
