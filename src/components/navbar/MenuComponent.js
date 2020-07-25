import React from 'react'
import {useDispatch} from 'react-redux'
import  {changeLang } from '../../redux/lang'
import { setTranslation } from '../../redux/translation'
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
                <MenuItem onClick={() => {dispatch(changeLang('en-US')); handleClose(); dispatch(setTranslation('en-US'))}}>English</MenuItem>
                <MenuItem onClick={() => {dispatch(changeLang('es-ES')); handleClose(); dispatch(setTranslation('es-ES'))}}>Español</MenuItem>
                <MenuItem onClick={() => {dispatch(changeLang('pt-BR')); handleClose(); dispatch(setTranslation('pt-BR'))}}>Português</MenuItem>
            </Menu>
        </>
    )
}

export default MenuComponent
