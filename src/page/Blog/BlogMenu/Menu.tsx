import React from 'react';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MenuType } from '../Types/MentType';
import './Menu.scss'
import { parseInt } from 'lodash';

interface MenuProps {
  className?: string
  menu: MenuType
  updateMenu: (menu: MenuType) => void
}

interface MenuState {
  isLoading: boolean
  activeItem: string
}

export default class SideMenu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = {
      isLoading: true,
      activeItem:"blog",
    }
    this.itemClick = this.itemClick.bind(this);
  }

  shouldActive(level: string) {
    var levels: string[] = level.split('-');
    var stateLevels: string[] = this.state.activeItem.split('-');
    for(var i = 1; i<levels.length; i++) {
      if (levels[i] != stateLevels[i] || stateLevels[i] == undefined) {
        return ''
      }
    }
    return 'active';
  }

  renderMenu(menu: MenuType[], level: string) {
    if(menu.length <= 0) return;

    return menu.map((item, index) => {
      return(
        <MenuItem
          className={`${this.shouldActive(`${level}-${index}`)} ${level}-${index}`}
          key={`${item.title}-${index}`}
          disableRipple={true}
        >
          <Button
            onClick={()=>{this.itemClick(`${level}-${index}`)}}
            endIcon={item.hasChildren?<KeyboardArrowRightIcon/>:<></>}
            size={item.uri==undefined ? 'medium' : 'small'}
          >
            {item.title}
          </Button>

          { item.hasChildren &&
           <MenuList >
            {this.renderMenu(item.children!, `${level}-${index}`)}
           </MenuList>
          }

        </MenuItem>
      )
    })
  }

  itemClick(level: string) {
    this.setState({activeItem:level});
    var levels: string[] = level.split('-');

    var activeMenu: MenuType = this.props.menu;
    for(var i = 1; i<levels.length; i++) {
      activeMenu = activeMenu.children[parseInt(levels[i])]
    }

    if(activeMenu.haveBlogs)
    {
      this.props.updateMenu(activeMenu);
    }
  }

  render(){
    var extraClass = this.props.className ? this.props.className : '';
    return (
      <div className={`blog-menu ${extraClass}`}>
        <MenuList>
          { this.renderMenu(this.props.menu.children!, 'blog') }
        </MenuList>
      </div>
    )
  }
}