import React,{Component} from 'react';
import axios from 'axios';


const url = "https://xomato-api.herokuapp.com/api/filter";

class CuisineFilter extends Component{

    filterCuisine = (event) => {
        let optionId = this.props.optionId;
        let cuisineId = event.target.value;
        let cuisineUrl;
        if(cuisineId === ""){
            cuisineUrl = `${url}/${optionId}`
        }else{
            cuisineUrl = `${url}/${optionId}?cuisineId=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }

    render(){
        return(
            <>
                
                <div class="filter_cuisine filter_margin" onChange={this.filterCuisine}>
                    <span>Cuisine</span>
                     <div>
                         <input type="checkbox" name="cuisine" value="1"/>
                         <label>North Indian</label>
                     </div>
                     <div>
                        <input type="checkbox" name="cuisine" value="2"/>
                        <label>South Indian</label>
                    </div>
                    <div>
                        <input type="checkbox" name="cuisine" value="3"/>
                        <label>Chinese</label>
                    </div>
                    <div>
                        <input type="checkbox" name="cuisine" value="4"/>
                        <label>Fast Food</label>
                    </div>
                    <div>
                        <input type="checkbox" name="cuisine" value="5"/>
                        <label>Street Food</label>
                    </div>
                </div>
            </>
        )
    }
}

export default CuisineFilter