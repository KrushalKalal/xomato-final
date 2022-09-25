import React,{Component} from 'react';
import axios from 'axios';


const url = "https://xomato-api.herokuapp.com/api/filter";

class RatingFilter extends Component{

    filterRating = (event) => {
        let optionId = this.props.optionId;
        let rating = (event.target.value).split('<i class="fa-solid fa-star"/>');
        console.log(rating)
        let ratingUrl;
        let ratingValue = rating[0];
        if(event.target.value === ""){
            ratingUrl = `${url}/${optionId}`
        }else{
            ratingUrl = `${url}/${optionId}?rating=${ratingValue}`
        }
        axios.get(ratingUrl)
        .then((res) => {this.props.restPerRating(res.data)})
    }

    render(){
        
        return(
            
              <div class="filter_rating filter_margin" onChange={this.filterRating}>
                    <span>Customer Ratings</span>
                    <div>
                        <input type="radio" name="rating" value=""/>
                        <label> All </label>
                    </div>
                    <div>
                         <input type="radio" name="rating" value="4"/>
                         <label>4<i class="fa-solid fa-star"></i> & Above</label>
                     </div>
                     <div>
                        <input type="radio" name="rating" value="3"/>
                        <label>3<i class="fa-solid fa-star"></i> & Above</label>
                    </div>
                    <div>
                        <input type="radio" name="rating" value="2"/>
                        <label>2<i class="fa-solid fa-star"></i> & Above</label>
                    </div>
                    <div>
                        <input type="radio" name="rating" value="1"/>
                        <label>1<i class="fa-solid fa-star"></i> & Above</label>
                    </div>   
                </div>
                
            
        )
    }
}

export default RatingFilter