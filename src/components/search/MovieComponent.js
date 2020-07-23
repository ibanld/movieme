import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const MovieModal = ({handleOpen, open, movie: { title, overview, poster_path, release_date, vote_average, vote_count }}) => {




    return (
        <Dialog open={open} onClose={handleOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
        <DialogContentText>
            {overview}
        </DialogContentText>
        
        </DialogContent>
        <DialogActions>
         <Button variant='contained' color='primary'>
          <HighlightOffIcon onClick={() => handleOpen()}>Cerrar</HighlightOffIcon>

         </Button>
        </DialogActions>
      </Dialog>
    )
}

export default MovieModal
