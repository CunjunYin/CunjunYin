import React from 'react';
import {
    Container,
    Box,
    Grid,
    Typography
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeOptions } from '@mui/material/styles';
import './Footer.scss'

interface FooterProps {
    theme: ThemeOptions,
}

interface FooterState {

}
export default class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        const { theme } = this.props;
        return (
            <footer>
                <Box style={{ backgroundColor: theme.palette?.background?.default }}>
                    <Container maxWidth="lg" style={{ padding: '2rem 0' }}>
                        <Box>
                            <Typography variant="h3" textAlign='center' marginBottom="1rem">Cunjun Yin</Typography>
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
                    <Box className='bottom'>
                        <Container maxWidth="lg">
                            <Typography variant="body2" gutterBottom>Copyright 2023 © <a href='https://cunjunyin.com'>Cunjun.Yin</a>. All rights reserved.</Typography>
                        </Container>
                    </Box>
                </Box>
            </footer>
        )
    }
}