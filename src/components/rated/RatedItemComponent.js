import React from 'react';
import { Typography, Card, CardContent, CardHeader } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { removeRatedMovie, addRate } from '../../redux/rating';
import { showAlert } from '../../redux/alert';
import Moment from 'react-moment';
import Rating from '@material-ui/lab/Rating';
import VisibilityIcon from '@material-ui/icons/Visibility';

const ListedItem = ({ movie }) => {
	const dispatch = useDispatch();

	return (
		<Card
			style={{
				display: 'flex',
				marginTop: 20
			}}
		>
			<img
				style={{ maxHeight: '40%', maxWidth: '50%', flexShrink: 0.5 }}
				src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
				alt={movie.title}
			/>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
					alignItems: 'flex-end',
					flexShrink: 1
				}}
			>
				<CardHeader
					title={
						<Typography component='h5' variant='h5'>
							{movie.movie.title}
						</Typography>
					}
					subheader={
						<Typography variant='subtitle1' color='textSecondary'>
							<Moment format='DD/MM/YYYY'>{movie.movie.date}</Moment>
						</Typography>
					}
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}
				>
					<CardContent>
						<p>{movie.movie.overview}</p>
					</CardContent>
					<div style={{ display: 'flex', justifyContent: 'space-between', margin: '1vh 1vw' }}>
						<Rating
							name='simple-controlled'
							value={movie.rate}
							onChange={(event, newRate) => {
								dispatch(addRate(movie.movie, newRate));
								dispatch(
									showAlert(`You have rated ${movie.movie.title} with ${newRate} over 5`, 'info')
								);
							}}
						/>

						<VisibilityIcon
							onClick={() => {
								dispatch(removeRatedMovie(movie.movie));
								dispatch(
									showAlert(` You have deleted ${movie.movie.title} from Watched movies`, 'error')
								);
							}}
							style={{ cursor: 'pointer' }}
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default ListedItem;
