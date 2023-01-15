import _ from 'lodash';
import React from 'react';
import Banner from './Banner'

import './home.scss'

interface HomeProps{}
interface HomeState{
	component:number
}

export default class HomePage extends React.Component<HomeProps, HomeState> {

	constructor(props: HomeProps){
		super(props);
		this.state = {
			component:0
		}
	}

	setComponent(index:number){
		this.setState({component: index})
	}
	
	render() {
		return (
			<div className='page-home'>
				<Banner></Banner>
			</div>
		)
	}
}