import React from 'react'
import MovieModal from './MovieModal'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Button } from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import StarsIcon from '@material-ui/icons/Stars';

export const ResultList = ({ movie }) => {
    const [watched, setWatched] = React.useState(false)
    const [listed, setListed] = React.useState(false)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <Card>
            <CardActionArea onClick = { () => handleOpen()}>
                <CardMedia 
                component="img"
                image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                title="Movie Poster"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{movie.title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {movie.overview}
                        </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                {!watched ? (
                        <Button onClick={ () => setWatched(!watched)}>
                            <VisibilityOutlinedIcon />
                        </Button>
                    ) : (
                        <Button  onClick={ () => setWatched(!watched)}>
                            <VisibilityIcon />
                        </Button>
                    )}
                {!listed ? (
                        <Button onClick={ () => setListed(!listed)}>
                            <StarsOutlinedIcon />
                        </Button>
                    ) : (
                        <Button onClick={ () => setListed(!listed)}>
                            <StarsIcon />
                        </Button>
                    )}
            </CardActions>
            <MovieModal open={open} handleOpen={handleOpen} movie={movie}/>
        </Card>
    )
}

export default ResultList
