import React from 'react'
import { useSelector } from 'react-redux'
import ListedItem from './RatedItemComponent'
import { Typography } from '@material-ui/core'

const Rated = () => {
    const ratedMovies = useSelector((state) => state.rating)

    return (
        <div style={{marginTop: '2vh', marginBottom: '10vh'}}>
            <Typography variant="h4" component="h4">Your Watched Movies</Typography>
            {ratedMovies.length < 1 ?  
                ( <>Add a movie to your List</>) :
                (ratedMovies.map(movie => 
                    <ListedItem key={movie.movie.id} movie={movie} />
                ))               
                }
            
        </div>
    )
}

export default Rated
