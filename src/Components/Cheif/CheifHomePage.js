import React  ,{Component}from 'react';
import './HomePage.css';
import Cards from './Cards'


  class Cheif extends Component{
    render(){

      console.log(this.props)
    return (
      <div className="Home">

        <div  class="container">
          <img className='bigimg' 
          src={'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
          />
          
        </div>

        <div className="Top-left"> 
          <a href="https://www.facebook.com/basmakuhail2003">
            <img className='image' src={'https://www.facebook.com/images/fb_icon_325x325.png'} />
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img className='image' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png'} /> 
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img className='image' src={'https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale'} />
          </a>

    
          <button className="button" onClick={()=>this.props.history.push('/add')}>Add Meal</button>
        </div>

        <div className='centered'>
          <h1> Yammy!</h1>
          <input className='input' placeholder=" serch for meal"></input>
          <button className='searchButton'>
              <img 
              className='searchImage' 
              src={'https://raw.githubusercontent.com/google/material-design-icons/master/action/2x_web/ic_search_black_48dp.png'} />
          </button>
         
        </div>
            <Cards {...this.props}/>
      </div>
       
  );
    }
}

export default Cheif;