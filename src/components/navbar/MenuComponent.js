import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {eng, esp, port } from '../../redux/setLang'
import TranslateIcon from '@material-ui/icons/Translate';
import { Menu, MenuItem, IconButton } from '@material-ui/core'

const MenuComponent = props => {
    const [toggle, setToggle] = React.useState(false)
    
    const dispatch = useDispatch()
    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setToggle(!toggle)}>
                <TranslateIcon />
            </IconButton> 
            <Menu
                id="drop-menu"
                keepMounted
                open={Boolean(toggle)}
                onClose={() => setToggle(!toggle)}
            >
                <MenuItem onClick={() => dispatch(eng())}>English</MenuItem>
                <MenuItem onClick={() => dispatch(esp())}>Español</MenuItem>
                <MenuItem onClick={() => dispatch(port())}>Portuguese</MenuItem>
            </Menu>
        </>
    )
}

export default MenuComponent
