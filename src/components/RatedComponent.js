import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import MovieModal from './search/MovieComponent'
import PropTypes from 'prop-types'

const Rated = props => {
    const [rate, setRate] = React.useState(2);

    return (
        <List>
            <>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                MM/DD/YYYY
                            </Typography>
                            <Rating
                                name="simple-controlled"
                                value={rate}
                                onChange={(event, newRate) => {
                                    setRate(newRate);
                                }}
                            />
                        </>
                    }
                    />
                
                </ListItem>
                <Divider variant="inset" component="li" />
            </>
        </List>
    )
}

Rated.propTypes = {

}

export default Rated
