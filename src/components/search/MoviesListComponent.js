import React from 'react';
import MovieModal from './MovieComponent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Moment from 'react-moment';

export const ResultList = ({ movie }) => {
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<Card style={{ marginTop: '2vh' }}>
			<CardActionArea onClick={() => handleOpen()}>
				<CardMedia
					component='img'
					image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					title='Movie Poster'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{movie.title}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Moment format='DD/MM/YYYY'>{movie.date}</Moment>
				<Rating name='movierating' value={movie.vote_average / 2} readOnly precision={0.5} />
			</CardActions>
			<MovieModal open={open} handleOpen={handleOpen} movie={movie} />
		</Card>
	);
};

export default ResultList;
