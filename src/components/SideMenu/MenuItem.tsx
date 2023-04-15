import React from 'react';

interface MenuItemProps {
	className?: string
	item: any
	index: number
}

interface MenuItemState {
	isLoading: boolean
}

export default class MenuItem extends React.Component<MenuItemProps, MenuItemState> {
	constructor(props: MenuItemProps) {
		super(props);
	}

	handleContent(uri: string) {
		if (uri) {
			console.log(uri);
		}
	}

	render() {
		var extraClass = this.props.className ? this.props.className : '';
		return (
			<div
				className={`item ${extraClass}`}
				onClick={(e) => { this.handleContent(this.props.item.contentUri) }}
			>
				<span className='description'>{this.props.item.title}</span>
			</div>
		)
	}
}