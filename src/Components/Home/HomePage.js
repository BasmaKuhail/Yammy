import React  ,{Component}from 'react';
import './HomePage.css';
import Cards from './Cards.js';


  class Home extends Component{
    render(){

      console.log(this.props)

      return (
        <div className="Home">

          <div  class="container">
            <img className='bigimg' 
            src={'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
            />
            <p class="overlay">
              this site is a way to learn how to cook, you can also add meals if you are a chief,
              you can save your favourite meals by adding the to faverouts, and you will find much 
              more fun things to do....
              made by: Basma & Zayan Don't be shy and tell us what you think by contacting us on 
              facebook, twiter

            </p>
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

      
            <button className="button" onClick={()=>this.props.history.push('/SignUp')}>SignUp</button>
          </div>

          <div className='centered'>
            <h1> Yammy!</h1>
            
            <div className='search'>
            <input className='input' placeholder=" 🔍 serch for meal"></input>
            <button className='searchButton'>
              <img 
              className='searchImage' 
              src={'https://raw.githubusercontent.com/google/material-design-icons/master/action/2x_web/ic_search_black_48dp.png'} />
            </button>
            </div>
            <div >
              <button className='filter'>breakfast</button>
              <button className='filter'>lunch</button>
              <button className='filter'>diner</button>
              <button className='filter'>vage</button>

            </div>
          </div>
          
            <Cards/>
             
          </div>
          
      );
    }
}

export default Home;