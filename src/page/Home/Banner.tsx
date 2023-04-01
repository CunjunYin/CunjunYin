import React from 'react';
import {
	Container,
	Box
} from '@mui/material';
import { ReactComponent as Dream } from './img/pursue.svg';
import { ReactComponent as Moon } from './img/moon.svg';
import { ReactComponent as Stars } from './img/stars.svg';

export default class Banner extends React.Component {

	render() {
		return (
			<Box className='banner' display='flex' style={{ justifyContent: 'center', alignItems: 'center', color: '#f8f9fa' }}>
				<Container>
					<h1 className='title' style={{ textAlign: 'center', fontSize: '3rem', marginTop: 0 }}> Feel Free to click around</h1>
				</Container>

				<Stars></Stars>
				<Moon></Moon>
				<Dream></Dream>
			</Box>
		)
	}
}