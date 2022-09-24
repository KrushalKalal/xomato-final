import React,{Component,Fragment} from 'react';
import Header from './Header'
import ListingComponent from './ListingComponent'

class Listing extends Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <ListingComponent/>
            </Fragment>
        )
    }
}

export default Listing