import React,{Component,Fragment} from 'react';
import Header from './Header'
import Option from './Option';
import Collection from './Collection';
import Locality from './Locality'
import Zomapp from './Zomapp';


class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <Header/>
                <Option/>
                <Collection/>
                <Locality/>
                <Zomapp/>
            </Fragment>
        )
    }
}

export default Home