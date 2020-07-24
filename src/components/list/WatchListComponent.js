import React from 'react';
import WatchListItem from './WatchListItem'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';

export const WatchList = () => {
	const lang = useSelector((state) => state.lang);
	const listedMovies = useSelector((state) => state.listing);

	return (
		<>
			<div style={{marginTop: '2vh', marginBottom: '10vh'}}>
				<Typography variant="h4" component="h4">Your Pending Movies</Typography>
				{listedMovies.length < 1 ? 'Add a movie to your Watch list' : 
				(listedMovies.map(movie => <WatchListItem key={movie.id} movie={movie} />))}
			</div>


		</>
		);
};

export default WatchList;
