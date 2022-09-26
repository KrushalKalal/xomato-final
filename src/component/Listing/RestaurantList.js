import React from 'react';
import {Link} from 'react-router-dom'

const RestaurantList = (props) => {
    const listResataurant  = ({optionData}) => {
        if(optionData){
            console.log(optionData)
            if(optionData.length>0){
                return optionData.map((item) => {
                    return(
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 cards" key={item._id}>
                         <Link to={`/details?restid=${item.restaurant_id}`}>
                            <div class="order_cardimg">
                            <img src={item.restaurant_img} alt={item.restaurant_name}/>
                            <div class="order_min"><p>{item.time} min</p></div>
                       </div>
                       <div class="row ordercard_text">
                           <div class="col-md-6 col-sm-6 order_name">
                             {item.restaurant_name}
                           </div>
                           <div class="col-md-6 col-sm-6 order_rating">
                               {item.rating}<i class="fa-solid fa-star"></i>
                           </div>
                       </div>
                      </Link>
                       <div class="row ordercard_text">
                           <div class="col-md-7 col-sm-5 order_type">
                               {item.cuisines[0].cuisine_name},{item.cuisines[1].cuisine_name}
                           </div>
                           <div class="col-md-5  col-sm-5 order_price">
                               <i class="fa-solid fa-indian-rupee-sign"></i> {item.price} for two
                           </div>
                       </div>
                    
                       <hr />
                       <div class="row ordercard_text">
                           <div class="col-md-10 col-sm-10 order_summary">
                               <img src={item.trending_img} alt="trending"/>
                               <span>{item.counter}+ orders placed from here recently</span>
                           </div>
                           <div class="col-md-2 col-sm-2 order_safety">
                               <img src={item.safety_img} alt="max safety"/>
                           </div>
                       </div>
                    </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data As Per Filter</h2>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    <img src="https://i.ibb.co/Y24CWWZ/loader.gif" alt="loader"/>
                    <h2>Loading.....</h2>
                </div>
            )
        }
    }
    return(
        <div>
            {listResataurant(props)}
        </div>
    )
}
export default RestaurantList