import React from 'react';
import { Box } from '@mui/material'
import { MarkdownHttp } from '../../../core/services'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown-dark.css'
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
				this.setState({ markdown: response.body });
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
			<Box >
				<div className='article-control mb-4' style={{paddingTop:"1rem"}}>
					<div className='previous' onClick={this.props.previous}>Previous</div>
					<div className='menu' onClick={this.props.catalogue}>Catalogue</div>
					<div className='next' onClick={this.props.next}>Next</div>
				</div>
				{
					// eslint-disable-next-line
					<ReactMarkdown children={this.state.markdown}></ReactMarkdown>
				}
				<div className='article-control' style={{paddingBottom:"1rem"}}>
					<div className='previous' onClick={this.props.previous}>Previous</div>
					<div className='menu' onClick={this.props.catalogue}>Catalogue</div>
					<div className='next' onClick={this.props.next}>Next</div>
				</div>
			</Box>
		)
	}
}