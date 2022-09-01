import React from 'react';
import { Content } from './Content';
import { toast } from 'react-toastify';

import "./catalogue.scss";

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
			toast.warning("No previous")
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
			toast.warning("No Next")
		} else {
			this.setState({
				article: this.state.article + 1
			});
		}
	}

	render() {
		return (
			<div className='blog-catalogues'>
				{
					this.props.showCatalogue ? (
						this.props.blogs.map((item: any, index: number) => (
							<div className='blog-catalogue mb-4' key={index}>
								<div className='catalogue-img'></div>
								<div className='catalogue-content'>
									<div className='info'>
										<div className='date mb-2'>{item.date}</div>
										<h4 className='title mb-2'>{item.title}</h4>
										<div className='excerpt mb-5'>{item.excerpt}</div>
									</div>
									<button
										className='btn btn-primary'
										onClick={() => { this.handleReadmoreClick(item, index) }}
									>
										READ MORE
									</button>
								</div>
							</div>
						))
					) : (
						<Content
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