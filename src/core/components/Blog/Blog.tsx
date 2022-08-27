import React from 'react';
import SideMenu from './menu/menu';
import { Catalogue } from './intellectual/Catalogue';
import { BlogMenu, BreadcrumbMeta} from '../../../types'
import menu from './menu.json';

import "./blog.scss";


interface BlogProps {

}

interface BlogState {
  isLoading: boolean
  showCatalouge:boolean
  menu: any
  currentMenu: number
}

export default class Blog extends React.Component<BlogProps, BlogState> {

  constructor(props: BlogProps) {
    super(props);
    this.state = {
      isLoading: true,
      showCatalouge: true,
      menu:menu.blogs,
      currentMenu: 0
    };

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.updateShowCatalogue = this.updateShowCatalogue.bind(this);
  }

  componentDidMount() {

  }

  handleMenuItemClick(index: number) {
    this.setState({
      currentMenu: index,
      showCatalouge:true
    });
  }

  updateShowCatalogue(state: boolean) {
    this.setState({
      showCatalouge: state
    }, ()=>{console.log(this.state.showCatalouge)});
  }

  render() {
    return (
      <>
        <div className='blogs'>
          <SideMenu
            menu={this.state.menu}
            itemClick={this.handleMenuItemClick}
          />
          <div className='blog-content'>
              <div className='content-banner'>
                <div className='title'>{this.state.menu[this.state.currentMenu].title}</div>
                <div className='meta'>
                  <div className='post-date'>{this.state.menu[this.state.currentMenu].date}</div>
                </div>
              </div>
              <div className="content-container container">
                  <Catalogue
                    blogs={this.state.menu[this.state.currentMenu].pages}
                    showCatalogue={this.state.showCatalouge}
                    updateShowCatalogue={this.updateShowCatalogue}
                  /> 
              </div>
          </div>
        </div>
      </>
    )
  }
}