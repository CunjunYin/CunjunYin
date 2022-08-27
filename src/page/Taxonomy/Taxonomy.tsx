import React from 'react';
import Stacks from "../../core/components/TechStack/Stacks"
import SideMenu from "../../core/components/SideMenu/SideMenu"
import { TaxonomyType } from "../../core/types"


interface TaxonomyPageProps{
}

interface TaxonomyPageState {
	isLoading:boolean,
}

export default class TaxonomyPage extends React.Component<TaxonomyPageProps, TaxonomyPageState>{
	taxonomies: TaxonomyType[] = [
		{name: "React", "logo": "logo.png", except:"", background:"url(./img/react.png) no-repeat", width:'25%', height:250, top:'0px', left:'0%'},
		{name: "Angular", "logo": "logo.png", except:"", background:"url(./img/angular.jpg) no-repeat", width:'50%', height:200, top:'0px', left:'25%'},
		{name: "Machine Learning", "logo": "logo.png", except:"", background:"url(./img/machinelearning.png) no-repeat", width:'25%', height:550, top:'0px', left:'75%'},
		{name: "Cloud Computing", "logo": "logo.png", except:"", background:"url(./img/cloud.jpg) no-repeat", width:'25%', height:300, top:'250px', left:'0%'},
		{name: "Software Design", "logo": "logo.png", except:"", background:"url(./img/react.png) no-repeat", width:'50%', height:350, top:'200px', left:'25%'},
	]

	constructor(props: TaxonomyPageProps){
		super(props);
		this.state = {
			isLoading: true
		}
	}

	handleOnclick(e: any) {
		console.log(e);
	}
	
	render() {
		return (
			<div className='page-taxonomy container'>
				<Stacks data={this.taxonomies} click={this.handleOnclick}></Stacks>
			</div>
		)
	}
}