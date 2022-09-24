import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer>
            <div class="footer">
              <div class="footer_section">
                 <div class="row">
                 <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6 footer_img">
                     <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato" />
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_option">
                    <span>🇮🇳 India <i class="fa-solid fa-chevron-down"></i></span>
                    <span> <i class="fa-solid fa-globe"></i> English <i class="fa-solid fa-chevron-down"></i></span>
                  </div>
                </div> 
            </div>
            <div class="footer_nav">
                <div class="row">
                <div class="footer_nav_style col-lg-2 col-md-2 col-sm-6 col-xs-6">
                    <h4>
                        About zomato
                    </h4>
                    <ul>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Work With Us</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Report Fraud</a></li>
                    </ul>
                </div>
                <div class="footer_nav_style col-lg-2 col-md-2 col-sm-6 col-xs-6">
                    <h4>
                        ZOMAVERSE
                    </h4>
                    <ul>
                        <li><a href="#">Zomato</a></li>
                        <li><a href="#">Feeding India</a></li>
                        <li><a href="#">Hyperpure</a></li>
                        <li><a href="#">Zomaland</a></li>
                    </ul>
                </div>
                <div class="footer_nav_style col-lg-2 col-md-2 col-sm-6 col-xs-6">
                    <h4>
                        FOR RESTAURANTS
                    </h4>
                    <ul>
                        <li><a href="#">Partner With Us</a></li>
                        <li><a href="#">Apps For You</a></li>
                   </ul>
                   <div class="enterprise">
                    <h4>
                        FOR Enterprises
                    </h4>
                    <ul>
                        <li><a href="#">Zomato For Work</a></li>
                    </ul>
                    </div>
                </div>
                <div class="footer_nav_style col-lg-2 col-md-2 col-sm-6 col-xs-6">
                    <h4>
                        Learn More
                    </h4>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Sitemap</a></li>
                       
                    </ul>
                </div>
                <div class="footer_nav_style col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <h4>
                        Social Links
                    </h4>
                    <div class="social_links">
                         <div>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                            <i class="fab fa-facebook"></i>
                         </div>
                         <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="download from playstore"/>
                         <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="download from appstore"/>
                    </div>
                </div>
            </div>
        </div>
            <hr class="footer_hr"/>
            <div class="footer_text">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. <br />2008-2022 © Zomato™ Ltd. All rights reserved.</div>
        </div>

        </footer>
        )
    }
}

export default Footer
