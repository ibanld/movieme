import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Results from './Results'
import Watched from './Watched'
import Pending from './Pending'

export const MainComponent = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Results}>
                    <Results />
                </Route>
                <Route exact path="/watched" component={Watched}>
                    <Watched />
                </Route>
                <Route exact path="/pending" component={Pending}>
                    <Pending />
                </Route>
            </Switch>
        </Router>
    )
}

export default MainComponent
