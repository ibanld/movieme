import React from 'react'
import Navbar from './navbar/NavbarComponent'
import { Container } from '@material-ui/core'
import BottomComponent from './BottomComponent'
import {AlertComponent} from './AlertComponent'


export const MainComponent = (props) => {
    return (
        <>
            <Navbar />
            <AlertComponent/>
            <Container maxWidth="sm">
                {props.children}
            </Container>
            <BottomComponent />
        </>
    )
}

export default MainComponent
