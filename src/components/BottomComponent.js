import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';
import PageviewTwoToneIcon from '@material-ui/icons/PageviewTwoTone';
import {WatchedRoute, PendingRoute, SearchRoute} from '../Routing'
import Pending from './Pending';

const useStyles = makeStyles({
    root: {
        width: '100vw',
        position: 'fixed',
        bottom: 0
    },
});

export default function BottomComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const linkTo = goto => {
            console.log(goto)
        return (
            <Link to={`/${goto}`}/>

        )
    }

    return (
        <>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="Search" icon={<PageviewTwoToneIcon /> } component={Link} to={SearchRoute} />
            <BottomNavigationAction label="Watched" icon={<VisibilityTwoToneIcon />} component={Link} to={WatchedRoute} />
            <BottomNavigationAction label="Pending" icon={<StarsTwoToneIcon />} component={Link} to={PendingRoute}/>
            </BottomNavigation>
        </>
    );
}