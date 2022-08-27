import React from 'react';
import { BreadcrumbMeta } from '../../../../types';
import MenuItem from './MenuItem'

interface MenuProps {
  className?: string
  menu: any
  itemClick: (e: any) => void
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
      <div className={`sidebar ${extraClass}`}>
        <div className='menu-header mb-3'>
          <div className="search-container">
            <input type="text" className="hide" placeholder="Search ..."/>
          </div>
        </div>
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