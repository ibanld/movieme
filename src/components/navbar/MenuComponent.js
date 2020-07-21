import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Menu, MenuItem, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

const MenuComponent = props => {
    const [toggle, setToggle] = React.useState(false)


    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setToggle(!toggle)}>
                <MenuIcon />
            </IconButton> 
            <Menu
                id="drop-menu"
                keepMounted
                open={Boolean(toggle)}
                onClose={() => setToggle(!toggle)}
            >
                <Link to="/"><MenuItem onClick={() => setToggle(!toggle)}>Search</MenuItem></Link>
                <Link to="/watched"><MenuItem onClick={() => setToggle(!toggle)}>My Movies</MenuItem></Link>
                <Link to="/pending"><MenuItem onClick={() => setToggle(!toggle)}>My Watch List</MenuItem></Link>
            </Menu>
        </>
    )
}

export default MenuComponent
