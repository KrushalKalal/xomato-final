import React,{Component} from 'react';
import axios from 'axios';
import CuisineFilter from './Filter/CuisineFilter';
import CostFilter from './Filter/CostFilter';
import RatingFilter from './Filter/RatingFilter';
import RestaurantList from './RestaurantList';
import Header from './Header'
import './RestaurantList.css'
import './Filter.css'

const optionList = "https://xomato-api.herokuapp.com/api/restaurantList?optionId="

class ListingComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            options:''
        }
    }

    setDataPerFilter = (data) => {
      this.setState({options:data})
  }

    render(){
        return(
         <>
          <Header/>
          <section class="container-fluid">
             <div class="row">
                 <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 filter">
                    <div class="filters">
                      <div class="title">
                        <span>Filters</span>
                        <hr/>
                      </div>
                      <CuisineFilter optionId={this.props.match.params.optionId}
                       restPerCuisine={(data) => {this.setDataPerFilter(data)}}
                      />
                      <hr/>
                      <CostFilter optionId={this.props.match.params.optionId}
                      restPerCost={(data) => {this.setDataPerFilter(data)}}
                      />
                      <hr/>
                      <RatingFilter optionId={this.props.match.params.optionId}
                      restPerRating={(data) => {this.setDataPerFilter(data)}}
                      />
                      
                     </div>
                 </div>
                 <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 content">
                   <div class="content_block">
                     <h2>Order food online on Xomato</h2>
                     <div class="row order_cardmargin">
                       <RestaurantList optionData={this.state.options}/>
                    </div>
                   </div>
                 </div> 
            </div>
          </section> 
         </> 
           
        )
    }

    componentDidMount(){
        let optionId = this.props.match.params.optionId;
        sessionStorage.setItem('optionId',optionId)
        axios.get(`${optionList}${optionId}`)
        .then((res) => {this.setState({options:res.data})})
    }
}

export default ListingComponent