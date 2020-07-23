import React from 'react'
import { Button , ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { removeRatedMovie, addRate } from '../redux/rating'
import Moment from 'react-moment'
import Rating from '@material-ui/lab/Rating'
import VisibilityIcon from '@material-ui/icons/Visibility';

const ListedItem = ({ movie }) => {
    const dispatch = useDispatch()

    return (
        <>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={movie.movie.title} src={`https://image.tmdb.org/t/p/w780/${movie.movie.poster_path}`} />
            </ListItemAvatar>
            <ListItemText
            primary={movie.movie.title}
            secondary={
                <>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >
                        {movie.movie.overview}
                    </Typography>
                    <Moment format="DD/MM/YYYY">{movie.movie.date}</Moment>
                    <Button onClick={() => dispatch(removeRatedMovie(movie.movie))}>
                            <VisibilityIcon />
                    </Button>
                    <Rating
                        name="simple-controlled"
                        value={movie.rate}
                        onChange={(event, newRate) => dispatch(addRate(movie.movie, newRate))}
                    />
                </>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
    </>
    )
}

export default ListedItem

