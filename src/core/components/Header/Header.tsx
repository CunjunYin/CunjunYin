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
    theme: string
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            theme: this.getCookie('theme')
        }

        this.handleSwitchChange = this.handleSwitchChange.bind(this);
    }

    setCookie(name: string, value: any): void{
        document.cookie = name + "=" + value + ";path=/";
    }

    getCookie(name: string): any {
        let cname = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }

        return "";
    }

    checkCookie(name: string): boolean {
        if (this.getCookie(name) != "") {
            return true
        }

        return false
    }

    handleSwitchChange(event: React.ChangeEvent<HTMLInputElement>) {
        var theme = '';
        if(this.checkCookie('theme')) {
            theme = this.getCookie('theme') == 'dark'? 'light': 'dark';
        }else {
            theme = 'dark';
        }
        this.setCookie('theme', theme);
        this.setState({ theme: theme });
    }

    render() {
        return (
            <AppBar position="fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
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
                        <div>
                            <Switch checked={this.state.theme=='dark'} onChange={this.handleSwitchChange} />
                        </div>
                    </Grid>
                </Container>
            </AppBar>
        )
    }
}