import React,{Component} from 'react';
import axios from 'axios';


const url = "https://xomato-api.herokuapp.com/api/filter";

class CostFilter extends Component{

    filterCuisine = (event) => {
        let optionId = this.props.optionId;
        let cost = (event.target.value).split('-');
        let costUrl;
        let lcost = cost[0];
        let hcost = cost[1]
        if(event.target.value === ""){
            costUrl = `${url}/${optionId}`
        }else{
            costUrl = `${url}/${optionId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
        
              <div class="filter_price filter_margin" onChange={this.filterCuisine}>
                    <span>Cost For Two</span>
                    <div>
                        <input type="radio" name="price" value=""/>
                        <label> All </label>
                    </div>

                     <div>
                         <input type="radio" name="price"  value="200-500"/>
                         <label><i class="fa-solid fa-indian-rupee-sign"></i>200-500</label>
                     </div>
                     <div>
                        <input type="radio" name="price"  value="500-1000"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i>500-1000</label>
                    </div>
                    <div>
                        <input type="radio" name="price"  value="1000-1500"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i>1000-1500</label>
                    </div>
                    <div>
                        <input type="radio" name="price"  value="1500-2000"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i>1500-2000</label>
                    </div>
                 </div>

        )
    }
}

export default CostFilter