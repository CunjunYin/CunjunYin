import _ from 'lodash';
import React from 'react';

import Onbording from './Landing'
import BlogLanding from './blog-landing';
import './home.scss'

interface HomeProps{}
interface HomeState{
	component:number
}

export default class HomePage extends React.Component<HomeProps, HomeState> {
	timer: null|NodeJS.Timeout = null;

	updateValue = _.throttle((val) => {
		if (val < 0){ // scroll top
			var component = this.state.component - 1;
			if (component > -1){
				this.setState({component: component})
			}
		} else {
			var component = this.state.component + 1;
			if (component < 2){
				this.setState({component: component})
			}
		}
	}, 2000);	

	constructor(props: HomeProps){
		super(props);
		this.state = {
			component:0
		}
		this.updateValue = this.updateValue.bind(this);
		this.handleOnScroll = this.handleOnScroll.bind(this);
	}

	switchPage():any {
		switch(this.state.component) {
			case 0:
				return <Onbording></Onbording>
			case 1:
				return <BlogLanding></BlogLanding>
			default:
				return <div></div>
		}
	}
	
	handleOnScroll(e:any) {
		this.updateValue(e.deltaY);
	}

	setComponent(index:number){
		this.setState({component: index})
	}
	
	render() {
		return (
			<div className='page-home' onWheel={this.handleOnScroll}>
				{this.switchPage()}

				<div className='indicator'>
					<div className={this.state.component == 0 ? "circular active": "circular"} onClick={()=>{this.setComponent(0)}}>
						<div className='dot'></div>
						<div className='circles'>
							<div className='circle'></div>
							<div className='circle'></div>
						</div>
					</div>
					<div className={this.state.component == 1 ? "circular active": "circular"} onClick={()=>{this.setComponent(1)}}>
						<div className='dot'></div>
						<div className='circles'>
							<div className='circle'></div>
							<div className='circle'></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}