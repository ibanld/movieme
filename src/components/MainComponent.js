import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import { Container } from '@material-ui/core'
import BottomComponent from './BottomComponent'

export const MainComponent = (props) => {
    return (
        <Router>
            <Navbar />
            <Container maxWidth="sm">
                {props.children}
            </Container>
            <BottomComponent />
        </Router>
    )
}

export default MainComponent
