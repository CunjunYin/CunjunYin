import React from 'react';
import { MarkdownHttp } from '../../../services'
import { renderMarkdown } from '../../../utils/text'

import './markdown.scss'
import './content.scss'

interface ContentProps {
	className?: string
	uri: string
	next: ()=>void
	catalogue: ()=>void
	previous: ()=>void
}

interface ContentState {
	isLoading: boolean
	markdown: string
}

export class Content extends React.PureComponent<ContentProps, ContentState> {
	constructor(props: ContentProps) {
		super(props);
		this.state = {
			isLoading: true,
			markdown: ''
		}
	}

	async getFile() {
		if( this.props.uri ) {
			const response = await MarkdownHttp.getFile(this.props.uri);
			if (response.success) {
				this.setState({markdown: renderMarkdown(response.body)});
			}
		}
	}

	componentDidMount() {
		this.getFile()
	}

	componentDidUpdate(){
		this.getFile()
	}

	render() {
		return (
			<div className='content'>
				<div className='article-control mb-4'>
					<div className='previous' onClick={this.props.previous}>Previous</div>
					<div className='catalogue' onClick={this.props.catalogue}>Catalogue</div>
					<div className='next' onClick={this.props.next}>Next</div>
				</div>
				<article className="markdown" dangerouslySetInnerHTML={{ __html: this.state.markdown }}></article>
				<div className='article-control'>
					<div className='previous' onClick={this.props.previous}>Previous</div>
					<div className='catalogue' onClick={this.props.catalogue}>Catalogue</div>
					<div className='next' onClick={this.props.next}>Next</div>
				</div>
			</div>
		)
	}
}