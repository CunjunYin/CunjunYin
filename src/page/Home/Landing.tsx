import React from 'react';
import { ReactComponent as Dream } from './img/pursue.svg';
import { ReactComponent as Moon } from './img/moon.svg';
import { ReactComponent as Stars } from './img/stars.svg';

export default class Onbording extends React.Component {

	render() {
		return (
			<div className='banner-landing'>
				<div className="content">
					<h3>Hi guest</h3>
					<p>Enjoy exploring this site.</p>
					<p>Although everything it's in development</p>
				</div>
				<Moon></Moon>
				<Dream></Dream>
				<Stars></Stars>
			</div>
		)
	}
}