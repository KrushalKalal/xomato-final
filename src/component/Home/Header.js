import React,{Component} from 'react';
import './Header.css';
import { Link,withRouter } from 'react-router-dom';


const cityUrl = "https://xomato-api.herokuapp.com/api/cityList";
let restaurantUrl = "https://xomato-api.herokuapp.com/api/restaurantList?cityId="
const url = "https://xomato-api.herokuapp.com/api/auth/userInfo"

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurant:'',
            userData:'',
            username:'',
            userImg:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData:''})
        this.props.history.push('/')

    }


    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus','LoggedIn')
            return(
                <>
                   <li><Link className="btn" to="/logIn">Hi {data.name}</Link></li>
                    <button className="btn btn-danger" onClick={this.handleLogout}>
                        <span className="glyphicon glyphicon-log-out"></span>  Logout   
                    </button> 
                </>
            )

        }else{
            return(
                <>
                    <li><Link className="btn" to="/logIn">Log in</Link></li>
                    <li><Link className="btn" to="/Register">Sign up</Link></li>
                </>
            )
        }
    }



    renderCity = (data) =>{
        if(data){
            console.log(data)
            return data.map((item)=>{
                return(
                    <option value={item.city_id} key={item.city_id}>{item.city_name}</option>
                   
                )
            })
        }
      
    }

    handleCity = (event) => {
        let city_id = event.target.value;
        console.log(city_id);
        fetch(`${restaurantUrl}${city_id}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })

        
    }

    handleRest = (event) =>{
        this.props.history.push(`/details?restid=${event.target.value}`)
    }

    renderRestaurant=(data)=>{
        if(data){
            console.log(data)
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }


    render(){
        return(
            <section class="header_section">
            <div class="navigation">
                <div>
                    <h4>Get the App</h4>
                </div>
                <ul class="xomato_nav">
                {this.conditionalHeader()}
                </ul>
            </div>
            <div class="zomato_head">
                 <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato logo"/>
                 <h3>Discover the best food & drinks in Ahmedabad</h3>
                 <div class="search">
                     <i class="fas fa-map-marker-alt"></i>
                     <select onChange={this.handleCity}>
                        <option>Select Your City</option>
                        {this.renderCity(this.state.location)}
                    </select>
                     {/* <i class="fas fa-search"></i> */}
                     <select onChange={this.handleRest}>
                     <option>Search for restaurant, cuisine or a dish</option>
                     {this.renderRestaurant(this.state.restaurant)}
                     </select>
                     {/* <input type="text" placeholder="Search for restaurant, cuisine or a dish"/> */}
                 </div>
            </div>
            <div class="zomato_background">
               <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="xomato"/>
            </div>
        </section>
        )
    }

    componentDidMount(){
        sessionStorage.setItem('loginStatus','LoggedOut')
        Promise.all([fetch(cityUrl), fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })])
        .then(([res1 , res2])=> {
            return Promise.all([res1.json(), res2.json()])
        })  
        .then(([res1,res2])=>{
            this.setState({location:res1,userData:res2})
        })
    }
}

export default withRouter(Header)