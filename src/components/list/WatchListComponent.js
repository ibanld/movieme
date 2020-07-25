import React from 'react';
import WatchListItem from './WatchListItem'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';

export const WatchList = () => {
	const listedMovies = useSelector((state) => state.listing);
	const translate = useSelector((state) => state.translate);

	return (
		<>
			<div style={{marginTop: '2vh', marginBottom: '10vh'}}>
				<Typography variant="h4" component="h4">{translate.pendingTitle}</Typography>
	{listedMovies.length < 1 ? <>{translate.addMovie}</> : 
				(listedMovies.map(movie => <WatchListItem key={movie.id} movie={movie} />))}
			</div>


		</>
		);
};

export default WatchList;
