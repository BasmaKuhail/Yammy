import React  ,{Component}from 'react';
import './UserHomePage.css';
import Cards from '../Card/Card.js'


  class User extends Component{
    render(){

      console.log(this.props)
    return (
      <div className="Home">

        <div  class="container">
          <img className='bigimg' 
            src={'https://backgrounddownload.com/wp-content/uploads/2018/09/background-for-food-website-3.jpg'}
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

    
          <button className="buttonAdd" onClick={()=>this.props.history.push('/favourite')}>Favourite</button>

        </div>

        <div className='centered'>
          <h1> Yummy!</h1>
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

export default User;