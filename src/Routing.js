import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent'
import SearchBar from './components/search/SearchBar'
import Pending from './components/Pending'
import Watched from './components/Watched'


export const SearchRoute = "/";
export const WatchedRoute = "/watched";
export const PendingRoute = '/pending';

const Routing = () => {
    return (
        <MainComponent>
            <Route exact path={SearchRoute} component={SearchBar} />
            <Route exact path={WatchedRoute} component={Watched} />
            <Route exact path={PendingRoute} component={Pending} />
        </MainComponent>
    )
}

export default withRouter(Routing)
