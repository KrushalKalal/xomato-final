import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const url = "https://xomato-api.herokuapp.com/api/auth/userInfo"

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            userImg:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData: '' })
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

    render(){
        console.log(this.state.userData.name)
        return(
            <section>
            <div class="row listing_header_section">
                <div class="col-md-2 zomato_logo">
                   <Link to="/"> <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato"/></Link>
                </div>
                <div class="col-md-7 search">
                    <i class="fas fa-map-marker-alt"></i>
                    <select name="Ahmedabad" id="city">
                       <option value="ahmedabad">Ahmedabad</option>
                       <option value="mumbai">Mumbai</option>
                       <option value="delhi">Delhi</option>
                       <option value="chennai">Chennai</option>
                       
                     </select>
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                </div>
                <div class="col-md-3">
                <ul class="listing_nav">
                {this.conditionalHeader()}
                </ul>
            </div>
            </div>
        </section>
        )
    }
    componentDidMount(){
        
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default Header