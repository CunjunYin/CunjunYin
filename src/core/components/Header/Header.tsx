import React from 'react';
import {
    AppBar,
    Container,
    Grid,
    Switch
} from '@mui/material';
import { ReactComponent as Rabbit } from './inkrabbit.svg';
import './Header.scss'

interface HeaderProps {
}

interface HeaderState {
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <AppBar position="fixed" style={{backgroundColor: '#e2e2e2'}}>
                <Container maxWidth="lg">
                    <Grid display="flex" justifyContent="space-between" alignItems="center">
                        <Grid display="flex" justifyContent="start" alignItems="center">
                            <div className='logo'>
                                <a className="brand" href="/">
                                    <span className="zodiac">
                                        <Rabbit></Rabbit>
                                    </span>
                                    CJ·Y
                                </a>
                            </div>
                            <div className='container'>
                                <a href="/blog">Blogs</a>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        )
    }
}