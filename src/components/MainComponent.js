import React from 'react'
import Navbar from './navbar/NavbarComponent'
import { Container } from '@material-ui/core'
import BottomComponent from './BottomComponent'


export const MainComponent = (props) => {
    return (
        <>
            <Navbar />
            <Container maxWidth="sm">
                {props.children}
            </Container>
            <BottomComponent />
        </>
    )
}

export default MainComponent
