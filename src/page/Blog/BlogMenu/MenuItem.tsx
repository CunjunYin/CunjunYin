import React from 'react';

interface MenuItemProps {
	className?: string
	item: any
	index: number
	active: boolean
	click: (index: number) => void
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
		extraClass = this.props.active ? "active" : '';
		return (
			<div
				className={`item ${extraClass}`}
				onClick={(e) => { this.props.click(this.props.index) }}
			>
				<span className='description'>{this.props.item.title}</span>
			</div>
		)
	}
}