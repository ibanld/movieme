import React from 'react'
import TranslateIcon from '@material-ui/icons/Translate';
import { Menu, MenuItem, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

const MenuComponent = props => {
    const [toggle, setToggle] = React.useState(false)
    const [lang, setLang] = React.useState('en-US')

    const handleClick = lang => {
        setToggle(!toggle)
        setLang(lang)
        
    }
    console.log(lang)
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
                <MenuItem onClick={() => handleClick('en-US')}>English</MenuItem>
                <MenuItem onClick={() => handleClick('es-ES')}>Español</MenuItem>
                <MenuItem onClick={() => handleClick('pt-BR')}>Portuguese</MenuItem>
            </Menu>
        </>
    )
}

export default MenuComponent
