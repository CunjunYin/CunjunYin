import React from 'react';
import {
    Container,
    Box,
    Grid
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.scss'



interface FooterProps {

}

interface FooterState {

}

export default class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        return (
            <footer style={{background: '#212529', color: '#f8f9fa'}}>
                <Container maxWidth="lg" style={{padding: '2rem 0'}}>
                    <Box>
                        <h1 style={{ textAlign: 'center', marginTop:0 }}>Cunjun Yin</h1>
                        <Grid className='socials' display='flex' justifyContent='center'>
                            <nav>
                                <a className='linkedin' href="https://www.linkedin.com/in/cunjunyin/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon></LinkedInIcon>
                                </a>
                                <a className='github' href="https://github.com/CunjunYin" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon></GitHubIcon>
                                </a>
                            </nav>
                        </Grid>
                        <Grid className='site-navigation' display='flex' justifyContent='center'>
                            <nav>
                                <a href="/">Home</a>
                                <a href="/">About Me</a>
                                <a href="blog">Blog</a>
                            </nav>
                        </Grid>
                    </Box>
                </Container>
                <div className='bottom' style={{background: '#1a1d20'}}>
                    <Container maxWidth="lg">
                        <p style={{margin:0 }}> Copyright 2023 © <a href='https://cunjunyin.com'>Cunjun.Yin</a>. All rights reserved.</p>
                    </Container>
                </div>
            </footer>
        )
    }
}