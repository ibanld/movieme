import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListedItem from './RatedItemComponent'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@material-ui/core'
import MovieModal from './search/MovieComponent'
import PropTypes from 'prop-types'


const Rated = props => {

    const ratedMovies = useSelector((state) => state.rating)

    console.log(ratedMovies)

    return (
        <List>
            {ratedMovies.length < 1 ?  
                ( <>Add a movie to your List</>) :
                (ratedMovies.map(movie => 
                    <ListedItem key={movie.movie.id} movie={movie} />
                ))               
                }
            
        </List>
    )
}

Rated.propTypes = {

}

export default Rated
