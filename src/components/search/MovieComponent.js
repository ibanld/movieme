import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '@material-ui/lab/Rating'
import { addRatedMovie, removeRatedMovie, addRate } from '../../redux/rating'
import { addListedMovie, removeListedMovie } from '../../redux/listing'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import StarsIcon from '@material-ui/icons/Stars';

const MovieModal = ({handleOpen, open, movie}) => {
    const listedMovies = useSelector((state) => state.listing)
    const ratedMovies = useSelector((state) => state.rating)
    const dispatch = useDispatch()
    
    const ratingBtns = ratedMovies.find(savedMovie => savedMovie.movie.id === movie.id) ? 
                            (<Button onClick={() => dispatch(removeRatedMovie(movie))}>
                                <VisibilityIcon />
                            </Button>) :
                            (<Button onClick={() => {dispatch(addRatedMovie(movie)); dispatch(removeListedMovie(movie))}}>
                            <VisibilityOutlinedIcon />
                            </Button>) 
    
    const listingBtns = listedMovies.find(savedMovie => savedMovie.id === movie.id) ? 
                            (<Button onClick={() => dispatch(removeListedMovie(movie))}>
                                <StarsIcon />
                            </Button>):
                            (
                            <Button onClick={() => dispatch(addListedMovie(movie))}>
                                <StarsOutlinedIcon />
                            </Button>)

    return (
        <Dialog open={open} onClose={handleOpen} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {movie.overview}
            </DialogContentText>
            </DialogContent>
            <DialogActions>                  
                {ratingBtns}
                {listingBtns}
                <Rating
                    name="simple-controlled"
                    value={movie.rate}
                    onChange={(event, newRate) => dispatch(addRate(movie, newRate))}
                />
            </DialogActions>
        </Dialog>
    )
}

export default MovieModal
