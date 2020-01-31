import React  ,{Component}from 'react';
import './CheifHomePage.css';
import Cards from '../Card/Card.js'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg'


  class Cheif extends Component{
    render(){

      console.log(this.props)
    return (
      <div >

          <img className='bigimg' 
            src={'https://images.pexels.com/photos/616412/pexels-photo-616412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
          />
          

          <div className="Top-left"> 
            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={facebook} 
              />
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={instagram} 
              /> 
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={twitter} 
              />
            </a>

    
            <button 
              className="buttonAdd" 
              onClick={()=>this.props.history.push('/add')}>
                Add Meal
            </button>
            <button 
              className="buttonMyMeals" 
              onClick={()=>this.props.history.push('/myMeals')}>
                My Meals
            </button>
          </div>
          <img 
              className='yummyImgCheif'
              src={'https://images.squarespace-cdn.com/content/v1/58a2fdcebebafb516ada1fe8/1540290099613-3ROW0HJZE2XYX6V0X88E/ke17ZwdGBToddI8pDm48kHAe7tJsq_QjUiQiP46BuYd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UW40zwkR4L7HOs8xw3xsyz7UeCy_bEEXkaPS43zxyZdvP7cJNZlDXbgJNE9ef52e8w/Logo+Yummy.png?format=750w'}
          />

          <div className='cards'>
            <Cards {...this.props}/>
          </div>
      </div>
       
  );
    }
}

export default Cheif;