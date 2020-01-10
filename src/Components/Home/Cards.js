import React, { Component } from 'react';
import './Cards2.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';




class Cards extends Component{
    render(){
        return(
            <div>

                <div>
                    <Card className='card'>

                        <CardActionArea>

                            <CardContent>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className='avatar'>
                                        R
                                    </Avatar>
                                    }
                                        
                                    title="Pizza"
                                    subheader="By: mahmood"
                            />

                            <CardMedia
                                className='media'
                                image="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />

                                <Typography variant="body2" color="textSecondary" component="p">
                                    can make your day!
                                </Typography>
                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            <Button size="small" color="primary">
                            Learn More
                            </Button>

                            <IconButton aria-label="add to favorites" className='expandOpen'>
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                    </div>
                <div >
                    <Card className='card'>

                        <CardActionArea>

                            <CardContent>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className='avatar'>
                                        R
                                    </Avatar>
                                    }
                                    
                                    title="Pizza"
                                    subheader="By: mahmood"
                                />
                                <CardMedia
                                    className='media'
                                    image="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                />

                                <Typography variant="body2" color="textSecondary" component="p">
                                    can make your day!
                                </Typography>
                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            <Button size="small" color="primary">
                            Learn More
                            </Button>

                            <IconButton aria-label="add to favorites" className='expandOpen'>
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                    </div>
                <div >
                    <Card className='card'>

                        <CardActionArea>

                            <CardContent>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className='avatar'>
                                        R
                                    </Avatar>
                                    }
                                    
                                    title="Pizza"
                                    subheader="By: mahmood"
                                />
                                <CardMedia
                                    className='media'
                                    image="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                />

                                <Typography variant="body2" color="textSecondary" component="p">
                                    can make your day!
                                </Typography>
                            </CardContent>

                        </CardActionArea>

                        <CardActions>

                            <Button size="small" color="primary">
                            Learn More
                            </Button>

                            <IconButton aria-label="add to favorites" className='expandOpen'>
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                    </div>

            </div>
        );
    }

}

export default Cards;