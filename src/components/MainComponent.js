import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Results from './search/Results'
import Watched from './Watched'
import Pending from './Pending'
import { Container } from '@material-ui/core'
import BottomComponent from './BottomComponent'

export const MainComponent = (props) => {
    return (
        <Router>
            <Navbar />
            <Container maxWidth="md">
                {props.children}
            </Container>
            <BottomComponent />
        </Router>
    )
}

export default MainComponent
