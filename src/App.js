import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className='bigimg' src={'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
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
        <div className='top-right'>
        <button className="button">sign up</button>
        </div>
        </div>
        <h1 className='centered'> Yammy!</h1>
        <div >
        <input className='input' placeholder="  serch for meal"></input>
        <img className='image' src={'https://img.icons8.com/pastel-glyph/2x/search.png'} />
        </div>



      
       
    </div>
  );
}

export default App;
