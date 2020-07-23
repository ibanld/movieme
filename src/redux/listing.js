export function addListedMovie(movie) {
    return {
        type: 'ADD_LISTED_MOVIE',
        payload: movie
    }
}

export function removeListedMovie(movie) {
    return {
        type: 'REMOVE_LISTED_MOVIE',
        payload: movie
    }
}

export default function listedMoviesReducer(listedMovies= [], action) {
    switch(action.type) {
        case 'ADD_LISTED_MOVIE':
            return [...listedMovies, action.payload]

        case 'REMOVE_LISTED_MOVIE': {
            const newMovies = listedMovies.filter(movie => movie.id !== action.payload.id)
            return newMovies
        }
        default: 
            return listedMovies
            
    }
}