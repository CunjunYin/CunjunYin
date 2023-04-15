import React from 'react';
import {
	Container,
	Grid
} from '@mui/material';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { ReactComponent as Rabbit } from './inkrabbit.svg';
import './Header.scss'

interface HeaderProps {
}

interface HeaderState {
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
	render() {
		return (
			<header>
				<Container className="header-content" maxWidth="lg">
					<Grid display="flex" justifyContent="space-between" alignItems="center">
						<div className="left">
							<div className="logo">
								<a className="brand" href="/">
									<span className="zodiac">
										<Rabbit></Rabbit>
									</span>
									Cunjun Yin
								</a>
							</div>
						</div>
						<div className="right">
							<ul className="menu">
								<li className="menu-item">
									<a href="/">
										<OtherHousesOutlinedIcon></OtherHousesOutlinedIcon>
										<span>Home</span>
									</a>
								</li>
								<li className="menu-item">
									<a href="/blog">
										<BookOutlinedIcon></BookOutlinedIcon>
										<span>Blogs</span>
									</a>
								</li>
							</ul>
						</div>
					</Grid>
				</Container>
			</header>
		)
	}
}