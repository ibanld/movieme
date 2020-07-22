import React from 'react';
import { AppBar, Typography, Toolbar, Button, Box } from '@material-ui/core';
import MenuComponent from './MenuComponent';

const NavBar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<MenuComponent />
				<Typography>MovieMe </Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
