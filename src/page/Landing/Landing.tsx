import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Landing.scss";


export default class Onbording extends React.Component {

	render() {
		return (
			<div className='bording'>
				<Carousel>
					<Carousel.Item interval={1000}>
						<div className="content">
							<h3>Hi guest</h3>
							<p>Enjoy exploring this site.</p>
							<p>Although there is nothing here right now</p>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}