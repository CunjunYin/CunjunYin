import React from 'react';
import MenuItem from './MenuItem'
import './Menu.scss'

interface MenuProps {
  className?: string
  menu: any
  itemClick: any
}

interface MenuState {
  isLoading: boolean
  activeItem: number
}

export default class SideMenu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = {
      isLoading: true,
      activeItem:0,
    }
    this.itemClick = this.itemClick.bind(this);
  }

  componentDidMount() {
  }

  itemClick(index:number) {
    this.setState({activeItem:index});
    this.props.itemClick(index);
  }

  render() {
    var extraClass = this.props.className ? this.props.className : '';
    return (
      <div className={`blog-menu ${extraClass}`}>
        <div className='menu-body'>
          {
            this.props.menu.map((item: any, index: number) => (
              <MenuItem item={item} key={index} index={index} click={this.itemClick} active={this.state.activeItem==index}></MenuItem>
            ))
          }
        </div>
      </div>
    )
  }
}