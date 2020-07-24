import React from 'react'
import {useDispatch} from 'react-redux'
import {eng, esp, port } from '../../redux/setLang'
import TranslateIcon from '@material-ui/icons/Translate';
import { Menu, MenuItem, IconButton } from '@material-ui/core'

const MenuComponent = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = e => setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const dispatch = useDispatch()
    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <TranslateIcon />
            </IconButton> 
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {dispatch(eng()); handleClose()}}>English</MenuItem>
                <MenuItem onClick={() => {dispatch(esp()); handleClose()}}>Español</MenuItem>
                <MenuItem onClick={() => {dispatch(port()); handleClose()}}>Portuguese</MenuItem>
            </Menu>
        </>
    )
}

export default MenuComponent
