import React from 'react';
import MovieModal from '../search/MovieComponent';
import { useDispatch } from 'react-redux';
import { addRatedMovie } from '../../redux/rating';
import { showAlert } from '../../redux/alert';
import { removeListedMovie } from '../../redux/listing';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Moment from 'react-moment';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import StarsIcon from '@material-ui/icons/Stars';

const WatchListItem = ({ movie }) => {
    const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
    };
    
	const dispatch = useDispatch();

	return (
        <>
            <Card style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <CardContent style={{ cursor: 'pointer' }} onClick={() => handleOpen()}>
                        <Typography component='h5' variant='h5'>
                            {movie.title}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary'>
                            <Moment format='DD/MM/YYYY'>{movie.date}</Moment>
                        </Typography>
                        <Rating name='movierating' value={movie.vote_average / 2} readOnly precision={0.5} />
                    </CardContent>
                    <div>
                        <Button
                            onClick={() => {
                                dispatch(addRatedMovie(movie, 0));
                                dispatch(removeListedMovie(movie));
                                dispatch(showAlert(`${movie.title} added to Watched movies`, 'success'));
                            }}
                        >
                            <VisibilityOutlinedIcon />
                        </Button>
                        <Button onClick={() => {dispatch(removeListedMovie(movie));
                        dispatch(showAlert(`You have removed ${movie.title} from Watched movies`, 'error'));}}>
                            <StarsIcon />
                        </Button>
                    </div>
                </div>
                <CardMedia
                    style={{ width: 200, cursor: 'pointer' }}
                    image={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                    title={movie.title}
                    onClick={() => handleOpen()}
                />
            </Card>
            <MovieModal handleOpen={handleOpen} open={open} movie={movie} />
        </>
	);
};

export default WatchListItem;
