import React from 'react'
import TranslateIcon from '@material-ui/icons/Translate';
import { Menu, MenuItem, IconButton } from '@material-ui/core'

const MenuComponent = props => {
    const [toggle, setToggle] = React.useState(false)
    const [lang, setLang] = React.useState('en-US')

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
                <MenuItem onClick={() => setLang('en-US')}>English</MenuItem>
                <MenuItem onClick={() => setLang('es-ES')}>Español</MenuItem>
                <MenuItem onClick={() => setLang('pt-BR')}>Portuguese</MenuItem>
            </Menu>
        </>
    )
}

export default MenuComponent
