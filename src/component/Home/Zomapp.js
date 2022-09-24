import React,{Component} from 'react';
import './Zomapp.css';

class Zomapp extends Component{
    render(){
        return(
            <section class="app_section">
            <div class="row get_app">
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 app_image">
                    <img src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" alt="Get App" />  
                   </div>
                    <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 app_form">
                         <h2>Get the Zomato App</h2>
                         <h5>We will send you a link, open it on your phone to download the app</h5>
                         <div class="radio_btn">
                             <div>
                              <input type="radio" name="option" value="Email" checked/>
                              <label for="email">Email</label>
                            </div>
                            <div class="radio_margin">
                              <input type="radio" name="option" value="phone" />
                              <label for="phone">Phone</label>
                            </div>  
                         </div>
                         <div class="emailbox">
                             <input type="text" placeholder="Email"/>
                             <button>Share App Link</button>
                         </div>
                         <h6>Download app from</h6>
                         <div class="download_img">
                             <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="download from playstore"/>
                             <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="download from appstore"/>
                         </div>
                    </div>
            </div>
        
        </section>     
        )
    }
}

export default Zomapp