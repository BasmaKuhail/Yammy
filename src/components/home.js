import React, {Component} from 'react';
import './home.css';



class Home extends Component{
    render(){
        
    return(

<div>

    <div  class="container">
      <img className='bigimg' src={'https://image.freepik.com/free-photo/slice-delicious-pizza-with-ingredients-textured-wooden-background_23-2147926094.jpg'}/>
      {/* <div class="overlay">
        Yummy is a website that gives you many recipes.Cheives can use it to share their own recipes.
        <br/>
        Recipes in Yummy are filtered by many things. Discover Yummy now!
       </div> */}
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
       
        <button className="button" onClick={()=>this.props.history.push("/SignUp")}>sign up/login</button>
    </div>
        
    <div className='centered'>
        <h1> YUMMY!</h1>
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
};
};
export default Home; 
