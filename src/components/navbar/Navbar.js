import React from 'react'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'
import MenuComponent from './MenuComponent'

const NavBar = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <MenuComponent />
                <Typography>MovieMe</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
