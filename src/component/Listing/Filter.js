import React,{Component} from 'react';
import './Filter.css';

class Filter extends Component{
    render(){
        return(
            <div class="col-lg-3 filter">
             <div class="filters">
                <div class="title">
                    <span>Filters</span>
                </div>
                <div class="search_title">
                    <span>Select location</span>
                    <div>
                    <span>Select location
                    <i class="fa-solid fa-chevron-down"></i>
                    </span>
                    </div>
                </div>
                <div class="filter_cuisine filter_margin">
                    <span>Cuisine</span>
                     <div>
                         <input type="checkbox" name="cuisine"/>
                         <label>North Indian</label>
                     </div>
                     <div>
                        <input type="checkbox" name="cuisine"/>
                        <label>South Indian</label>
                    </div>
                    <div>
                        <input type="checkbox" name="cuisine"/>
                        <label>Chinese</label>
                    </div>
                    <div>
                        <input type="checkbox" name="cuisine"/>
                        <label>Fast Food</label>
                    </div>
                    <div>
                        <input type="checkbox" name="cuisine"/>
                        <label>Street Food</label>
                    </div>
                </div>
                <div class="filter_price filter_margin"/>
                    <span>Cost For Two</span>
                     <div>
                         <input type="radio" name="price"/>
                         <label>Less than <i class="fa-solid fa-indian-rupee-sign"></i> 500</label>
                     </div>
                     <div>
                        <input type="radio" name="price"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i> 500 to <i class="fa-solid fa-indian-rupee-sign"></i> 1000</label>
                    </div>
                    <div>
                        <input type="radio" name="price"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i> 1000 to <i class="fa-solid fa-indian-rupee-sign"></i> 1500</label>
                    </div>
                    <div>
                        <input type="radio" name="price"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i> 1500 to <i class="fa-solid fa-indian-rupee-sign"></i> 2000</label>
                    </div>
                    <div>
                        <input type="radio" name="price"/>
                        <label>More than <i class="fa-solid fa-indian-rupee-sign"></i> 2000</label>
                    </div>
                </div>
                <div class="filter_sort filter_margin">
                    <span>Sort</span>
                     <div>
                         <input type="radio" name="sort"/>
                         <label>Price low to high</label>
                     </div>
                     <div>
                        <input type="radio" name="sort"/>
                        <label>Price high to low</label>
                    </div>
                </div> 
                <div class="filter_rating filter_margin">
                    <span>Customer Ratings</span>
                     <div>
                         <input type="checkbox" name="rating"/>
                         <label>4<i class="fa-solid fa-star"></i> & Above</label>
                     </div>
                     <div>
                        <input type="checkbox" name="rating"/>
                        <label>3<i class="fa-solid fa-star"></i> & Above</label>
                    </div>
                    <div>
                        <input type="checkbox" name="rating"/>
                        <label>2<i class="fa-solid fa-star"></i> & Above</label>
                    </div>
                    <div>
                        <input type="checkbox" name="rating"/>
                        <label>1<i class="fa-solid fa-star"></i> & Above</label>
                    </div>   
                </div>
                <div class="filter_offer filter_margin">
                    <span>Offers</span>
                     <div>
                         <input type="checkbox" name="offer"/>
                         <label>Buy More,Save More</label>
                     </div>
                     <div>
                        <input type="checkbox" name="offer"/>
                        <label>Special Price</label>
                    </div>
                </div>
                <div class="filter_discount filter_margin">
                    <span>cuisine</span>
                     <div>
                         <input type="checkbox" name="discount"/>
                         <label>70% or more</label>
                     </div>
                     <div>
                        <input type="checkbox" name="discount"/>
                        <label>60% or more</label>
                    </div>
                    <div>
                        <input type="checkbox" name="discount"/>
                        <label>50% or more</label>
                    </div>
                    <div>
                       <input type="checkbox" name="discount"/>
                       <label>40% or more</label>
                   </div>
                   <div>
                    <input type="checkbox" name="discount"/>
                    <label>30% or more</label>
                   </div>
                
                </div>
                
             </div>
        
       
        )
    }
}

export default Filter