export function addRatedMovie(movie, rate) {
	return {
		type: 'ADD_RATED_MOVIE',
		payload: { movie, rate }
	};
}

export function removeRatedMovie(movie) {
	return {
		type: 'REMOVE_RATED_MOVIE',
		payload: movie
	};
}

export function addRate(movie, rate = 0) {
	return {
		type: 'ADD_RATE',
		payload: { movie, rate }
	};
}

export default function ratingMoviesReducer(ratedMovies = [], action) {
	switch (action.type) {
		case 'ADD_RATED_MOVIE':
			return [ ...ratedMovies, action.payload ];
		case 'REMOVE_RATED_MOVIE': {
			const newMovies = ratedMovies.filter((movie) => movie.movie.id !== action.payload.id);
			return newMovies;
		}
		case 'ADD_RATE': {
			const newMovies = ratedMovies.filter((movie) => movie.movie.id !== action.payload.movie.id);
			const ratedMovie = { movie: action.payload.movie, rate: action.payload.rate };
			const updatedMovies = [ ...newMovies, ratedMovie ];
			ratedMovies = updatedMovies;
			return ratedMovies;
		}
		default:
			return ratedMovies;
	}
}
