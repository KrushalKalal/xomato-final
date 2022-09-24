import React,{Component} from 'react';
import OptionList from './OptionList';
import './Option.css';

const optionList = "https://xomato-api.herokuapp.com/api/collectionList";

class Option extends Component{

    constructor(props){
        super(props)

        this.state={
            option:''
        }
    }

    render(){
        return(
            <section class="order_content">
                 <div class="row">
                   <OptionList optionType={this.state.option}/>
                </div>
         
          
            
       </section>
        )
    }


    componentDidMount(){
       fetch(optionList,{method:'GET'})
       .then((res)=>res.json())
       .then((data)=>{
        this.setState({option:data})
       })
    }
}

export default Option