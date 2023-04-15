import React from 'react';
import {
	Button,
} from '@mui/material'
import { Paper } from './Paper';
import "./Catalogue.scss";

interface CatalogueProps {
	className?: string
	blogs: any
	showCatalogue: boolean
	updateShowCatalogue: (value: boolean) => void
}

interface CatalogueState {
	isLoading: boolean
	article: number
}

export class Catalogue extends React.Component<CatalogueProps, CatalogueState> {
	constructor(props: CatalogueProps) {
		super(props);
		this.state = {
			isLoading: true,
			article: 0
		}
		this.handleReadmoreClick = this.handleReadmoreClick.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleCatalogue = this.handleCatalogue.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}


	handleReadmoreClick(item: any, index: number) {
		this.props.updateShowCatalogue(false);
		this.setState({
			article: index
		})
	}

	handlePrevious() {
		if (this.state.article < 1) {

		} else {
			this.setState({
				article: this.state.article - 1
			});
		}
	}

	handleCatalogue() {
		this.props.updateShowCatalogue(true);
	}

	handleNext() {
		if (this.state.article == this.props.blogs.length - 1) {
		} else {
			this.setState({
				article: this.state.article + 1
			});
		}
	}

	render() {
		return (
			<div className='catalogues'>
				{
					this.props.showCatalogue ? (
						this.props.blogs.map((item: any, index: number) => (
							<div className='catalogue mb-4' key={index}>
								<div className='catalogue-img' style={{background: item.background ? item.background: "#2196f3"}}></div>
								<div className='catalogue-content'>
									<div className='info'>
										<div className='date mb-2'>{item.date}</div>
										<h4 className='title mb-2'>{item.title}</h4>
										<div className='excerpt mb-5'>{item.excerpt}</div>
									</div>
									<Button 
										className='btn btn-primary'
										onClick={() => { this.handleReadmoreClick(item, index) }}
									>
										READ MORE
									</Button >
								</div>
							</div>
						))
					) : (
						<Paper
							uri={this.props.blogs[this.state.article].uri}
							next={this.handleNext}
							catalogue={this.handleCatalogue}
							previous={this.handlePrevious}
						/>
					)
				}
			</div>
		)
	}
}