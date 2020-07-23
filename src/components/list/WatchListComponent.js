import React from 'react';
import WatchListItem from './WatchListItem'
import { Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { removeRatedMovie, addRate } from '../../redux/rating'
import { addListedMovie, removeListedMovie } from '../../redux/listing';

export const WatchList = () => {
	const lang = useSelector((state) => state.lang);
	const listedMovies = useSelector((state) => state.listing);

	return (
		<>
			<div>
				<Typography variant="h4" component="h4">Your Pending Movies</Typography>
				{listedMovies.length < 1 ? 'Add a move to your Watch list' : 
				(listedMovies.map(movie => <WatchListItem key={movie.id} movie={movie} />))}
			</div>


		</>
		);
};

export default WatchList;
