import React,{Component} from 'react';
import './Collection.css';

class Collection extends Component{
    render(){
        return(
            <section class="collection_content">
            <div class="collection_title">
                <h2>Collections</h2>
                <div class="row">
                  <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12 title_details">Explore curated lists of top restaurants, cafes, pubs, and bars  based on trends</div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 location">All collections of xomato&nbsp;<i class="fas fa-caret-right"></i></div>
                </div>
            </div>
            <div class="collection_card">
              <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div class="card_details">
                          <span>
                              Live Cricket Screening
                              <br />30 Places
                              <i class="fas fa-caret-right"></i>
                          </span>
                      </div>
                      <img src="https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649145478.jpg?output-format=webp" alt="Cricket Screening"/>
                  </div> 
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div class="card_details">
                          <span>
                              Newly Opened
                              <br />11 Places
                              <i class="fas fa-caret-right"></i>
                          </span>
                      </div>
                      <img src="https://b.zmtcdn.com/data/collections/daf0f4765d084892ed0378eade2d106f_1595820022.jpg?output-format=webp" alt="Newly Opened"/>
                      
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div class="card_details">
                          <span>
                              Best Places
                              <br />41 Places
                              <i class="fas fa-caret-right"></i>
                          </span>
                      </div>
                      <img src="https://b.zmtcdn.com/data/collections/be6543a9fbd2c6a8b6db0ad0e4972f58_1537267039.jpg?output-format=webp" alt="Best of Ahmedabad"/>
                      
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div class="card_details">
                          <span>
                              Trending This Week
                              <br />30 Places
                              <i class="fas fa-caret-right"></i>
                          </span>
                      </div>
                      <img src="https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040538.png?output-format=webp" alt=" Trending This Week"/>
                      
                  </div>
              </div>
                
            </div>

        </section>
        )
    }
}

export default Collection