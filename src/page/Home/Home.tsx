import _ from 'lodash';
import React from 'react';
import Onbording from './Landing'
import BlogLanding from './blog-landing';
import FooterLanding from './footer-landing';

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
			if (component < 3){
				this.setState({component: component})
			}
		}
	}, 1000);	

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
			case 2:
				return <FooterLanding></FooterLanding>
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
					<div className={this.state.component == 0 ? "circular active": "circular"} onClick={()=>{this.setComponent(0)}}></div>
					<div className={this.state.component == 1 ? "circular active": "circular"} onClick={()=>{this.setComponent(1)}}></div>
					<div className={this.state.component == 2 ? "circular active": "circular"} onClick={()=>{this.setComponent(2)}}></div>
				</div>
			</div>
		)
	}
}