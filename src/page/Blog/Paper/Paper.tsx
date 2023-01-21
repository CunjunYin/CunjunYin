import React from 'react';
import { Box } from '@mui/material'
import { MarkdownHttp } from '../../../core/services'
import { renderMarkdown } from '../../../core/utils/text'
import 'github-markdown-css/github-markdown-light.css'

// import './markdown.scss'
import './content.scss'

interface PaperProps {
	className?: string
	uri: string
	next: () => void
	catalogue: () => void
	previous: () => void
}

interface PaperState {
	isLoading: boolean
	markdown: string
}

export class Paper extends React.PureComponent<PaperProps, PaperState> {
	theme = 'light'
	constructor(props: PaperProps) {
		super(props);
		this.state = {
			isLoading: true,
			markdown: ''
		}
	}

	async getFile() {
		if (this.props.uri) {
			const response = await MarkdownHttp.getFile(this.props.uri);
			if (response.success) {
				this.setState({ markdown: renderMarkdown(response.body) });
			}
		}
	}

	componentDidMount() {
		this.getFile()
	}

	componentDidUpdate() {
		this.getFile()
	}

	render() {
		return (
			<Box style={{background: this.theme=='light'? '#ffffff': '#0d1117'}}>
				<div className='article-control mb-4' style={{paddingTop:"1rem"}}>
					<div className='previous' onClick={this.props.previous}>Previous</div>
					<div className='menu' onClick={this.props.catalogue}>Catalogue</div>
					<div className='next' onClick={this.props.next}>Next</div>
				</div>
				<article className="markdown markdown-body" dangerouslySetInnerHTML={{ __html: this.state.markdown }}></article>
				<div className='article-control' style={{paddingBottom:"1rem"}}>
					<div className='previous' onClick={this.props.previous}>Previous</div>
					<div className='menu' onClick={this.props.catalogue}>Catalogue</div>
					<div className='next' onClick={this.props.next}>Next</div>
				</div>
			</Box>
		)
	}
}