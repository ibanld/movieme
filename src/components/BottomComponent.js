import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';
import PageviewTwoToneIcon from '@material-ui/icons/PageviewTwoTone';
import {RatedRoute, WatchListRoute, SearchRoute} from '../Routing'

const useStyles = makeStyles({
    root: {
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        boxShadow: '0px -3px 14px 3px rgba(0,0,0,0.2)'
    },
});

export default function BottomComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const translate = useSelector(state => state.translate)
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
            <BottomNavigationAction label={translate.searchNavbar} icon={<PageviewTwoToneIcon /> } component={Link} to={SearchRoute} />
            <BottomNavigationAction label={translate.watchedNavbar} icon={<VisibilityTwoToneIcon />} component={Link} to={RatedRoute} />
            <BottomNavigationAction label={translate.pendingNavbar} icon={<StarsTwoToneIcon />} component={Link} to={WatchListRoute}/>
            </BottomNavigation>
        </>
    );
}