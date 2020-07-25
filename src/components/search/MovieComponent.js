import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import { addRatedMovie, removeRatedMovie, addRate } from '../../redux/rating';
import { addListedMovie, removeListedMovie } from '../../redux/listing';
import { showAlert } from '../../redux/alert';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import StarsIcon from '@material-ui/icons/Stars';

const MovieModal = ({ handleOpen, open, movie }) => {
	const listedMovies = useSelector((state) => state.listing);
	const ratedMovies = useSelector((state) => state.rating);
	const translate = useSelector((state) => state.translate);
	const dispatch = useDispatch();

	const ratingBtns = ratedMovies.find((savedMovie) => savedMovie.movie.id === movie.id) ? (
		<Button
			onClick={() => {
				dispatch(removeRatedMovie(movie));
				dispatch(showAlert(`${movie.title}${translate.alertDeletedWatch}`, 'error'));
				handleOpen();
			}}
		>
			<VisibilityIcon />
		</Button>
	) : (
		<Button
			onClick={() => {
				dispatch(addRatedMovie(movie, 0));
				dispatch(showAlert(`${movie.title}${translate.alertAddedWatch}`, 'success'));
				dispatch(removeListedMovie(movie));
				handleOpen();
			}}
		>
			<VisibilityOutlinedIcon />
		</Button>
	);

	const listingBtns = listedMovies.find((savedMovie) => savedMovie.id === movie.id) ? (
		<Button
			onClick={() => {
				dispatch(removeListedMovie(movie));
				dispatch(showAlert(`${movie.title}${translate.alertDeletedPending} `, 'error'));
				handleOpen();
			}}
		>
			<StarsIcon />
		</Button>
	) : (
		<Button
			onClick={() => {
				dispatch(addListedMovie(movie));
				dispatch(showAlert(`${movie.title}${translate.alertAddedPending} `, 'success'));
				handleOpen();
			}}
		>
			<StarsOutlinedIcon />
		</Button>
	);

	return (
		<Dialog open={open} onClose={handleOpen} aria-labelledby='form-dialog-title'>
			<DialogTitle id='form-dialog-title'>{movie.title}</DialogTitle>
			<DialogContent>
				<img
					src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
					alt={movie.title}
					style={{ maxWidth: '100%' }}
				/>
				<DialogContentText>{movie.overview}</DialogContentText>
			</DialogContent>
			<DialogActions>
				{ratingBtns}
				{listingBtns}

				<Rating
					name='simple-controlled'
					value={movie.rate}
					onChange={(event, newRate) => {
						dispatch(addRate(movie, newRate));
						dispatch(
							showAlert(
								`${translate.ratingInit}${movie.title}${translate.ratingWith}${newRate}${translate.ratingRate}`,
								'info'
							)
						);
						handleOpen();
					}}
				/>
			</DialogActions>
		</Dialog>
	);
};

export default MovieModal;
