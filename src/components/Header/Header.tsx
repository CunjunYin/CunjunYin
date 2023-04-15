import React from 'react';
import {
	Box,
	Container,
	Grid,
	Link
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
				<Box sx={{
					backgroundColor: "background.paper"
				}}>
					<Container className="header-content" maxWidth="lg">
						<Grid display="flex" justifyContent="space-between" alignItems="center">
							<div className="left">
								<div className="logo">
									<Link className="brand" href="/">
										<span className="zodiac">
											<Rabbit></Rabbit>
										</span>
										Cunjun Yin
									</Link>
								</div>
							</div>
							<div className="right">
								<ul className="menu">
									<li className="menu-item">
										<Link href="/">
											<OtherHousesOutlinedIcon></OtherHousesOutlinedIcon>
											<span>Home</span>
											<Box className='hover-effect' sx={{backgroundColor: "primary.main"}}></Box>
										</Link>
									</li>
									<li className="menu-item">
										<Link href="/blog">
											<BookOutlinedIcon></BookOutlinedIcon>
											<span>Blogs</span>
											<Box className='hover-effect' sx={{backgroundColor: "primary.main"}}></Box>
										</Link>
									</li>
								</ul>
							</div>
						</Grid>
					</Container>
				</Box>
			</header>
		)
	}
}