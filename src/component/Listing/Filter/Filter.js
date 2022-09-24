import React,{Component} from 'react';
import './Filter.css';
import CuisineFilter from './CuisineFilter';

class Filter extends Component{
    render(){
        return(
            <div class="col-lg-3 filter">
             <div class="filters">
                <div class="title">
                    <span>Filters</span>
                </div>
                <CuisineFilter/>
             </div>
            </div>
            )
            }
}

export default Filter