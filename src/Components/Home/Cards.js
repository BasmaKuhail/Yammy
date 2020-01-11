import React , {Component}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
    },
    media: {
      width:350,
      height: 30,
      paddingTop: '65.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
  


function Cards(){
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
        <div>
        <div className='cards'>
                <div className='cards'>
                    <Card className={classes.card}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            B
                        </Avatar>
                        }
                        
                        title="Pizza"
                        subheader="By: mahmood"
                    />

                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Can make your day!
                        </Typography>
                    </CardContent>
                
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>

                    
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                    
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            recipe:

                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        </CardContent>
                    
                    </Collapse>
                    </Card>
                </div>
                <div className='cards'>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                        }
                        
                        title="Pizza"
                        subheader="By: mahmood"
                    />

                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Can make your day!
                        </Typography>
                    </CardContent>
                
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>

                    
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                    
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            recipe:

                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        </CardContent>
                    
                    </Collapse>
                    </Card>
                </div>
                <div className='cards'>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                        }
                        
                        title="Pizza"
                        subheader="By: mahmood"
                    />

                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Can make your day!
                        </Typography>
                    </CardContent>
                
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>

                    
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                    
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            recipe:

                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        <Typography>
                        1. put it in oven
                        </Typography>
                        </CardContent>
                    
                    </Collapse>
                    </Card>
                </div>    
            </div>

        </div>
    )
}

export default Cards;