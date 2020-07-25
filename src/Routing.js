import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import SearchBar from './components/search/SearchBarComponent';
import WatchList from './components/list/WatchListComponent';
import Rated from './components/rated/RatedComponent';

export const SearchRoute = '/movieme';
export const RatedRoute = '/rated';
export const WatchListRoute = '/watchlist';

const Routing = () => {
	return (
		<MainComponent>
			<Route exact path={SearchRoute} component={SearchBar} />
			<Route exact path={RatedRoute} component={Rated} />
			<Route exact path={WatchListRoute} component={WatchList} />
		</MainComponent>
	);
};

export default withRouter(Routing);
