import React from 'react'
import { useSelector } from 'react-redux'
import ListedItem from './RatedItemComponent'
import { Typography } from '@material-ui/core'

const Rated = () => {
    const ratedMovies = useSelector((state) => state.rating)
    const translate = useSelector((state) => state.translate)

    return (
        <div style={{marginTop: '2vh', marginBottom: '10vh'}}>
            <Typography variant="h4" component="h5">{translate.watchedTitle}</Typography>
            {ratedMovies.length < 1 ?  
                ( <>{translate.addMovie}</>) :
                (ratedMovies.map(movie => 
                    <ListedItem key={movie.movie.id} movie={movie} />
                ))               
                }
            
        </div>
    )
}

export default Rated
