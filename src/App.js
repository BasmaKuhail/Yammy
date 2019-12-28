import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div  class="container">
      <img className='bigimg' src={'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
      <div class="overlay">about us about usabout usabout usabout usabout usabout usabout usabout usabout us
      about usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usab
      out usabout usabout usabout usabout usabout usabout usabout usabout us</div>
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
       
        <button className="button">sign up</button>
        </div>
        
        <div className='centered'>
        <h1> Yammy!</h1>
        <input className='input' placeholder="  serch for meal"></input>
        <img className='image' src={'https://img.icons8.com/pastel-glyph/2x/search.png'} />
        <div >
          <button className='filter'>potato</button>
          <button className='filter'>tomato</button>
          <button className='filter'>onion</button>
          <button className='filter'>meat</button>
          <button className='filter'>rock</button>
          <button className='filter'>potato</button>

        </div>
        </div>

        


      
       
    </div>
  );
}

export default App;
