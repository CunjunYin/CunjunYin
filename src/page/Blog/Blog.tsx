import React from 'react';
import {
  Button,
  Container,
  Drawer,
  Paper
} from '@mui/material';
import { Catalogue } from './Paper'
import { SideMenu } from './BlogMenu';
import menu from './menu.json';
import './Blog.scss'

interface BlogPageProps { }

interface BlogPageState {
  isDrawerOpen: boolean,
  showCatalouge: boolean
  menu: any
  currentMenu: number
}

export default class BlogPage extends React.Component<BlogPageProps, BlogPageState>{

  constructor(props: BlogPageProps) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      showCatalouge: true,
      menu: menu.blogs,
      currentMenu: 0
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  toggleDrawer(anchor: string, open: boolean, event: React.KeyboardEvent | React.MouseEvent) {
    if (event && event.type === 'keydown' &&
      (
        (event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift'
      )
    ) {
      return;
    }

    this.setState({ isDrawerOpen: open });
  }

  handleMenuItemClick(index: number): void {
    this.setState({
      currentMenu: index,
      showCatalouge: true
    });
  }

  updateShowCatalogue(state: boolean) {
    this.setState({
      showCatalouge: state
    }, () => { console.log(this.state.showCatalouge) });
  }

  render() {
    return (
      <div className='page-blog'>
        <Container>
          <Button
            className="menu-opener"
            onClick={(e: any) => { this.toggleDrawer('left', true, e) }}
          >
            Menu
          </Button>
          <Drawer
            anchor='left'
            open={this.state.isDrawerOpen}
            onClose={(e: any) => { this.toggleDrawer('left', false, e) }}
          >
            <SideMenu menu={this.state.menu} itemClick={this.handleMenuItemClick}></SideMenu>
          </Drawer>
          <Paper elevation={3}>
            <Catalogue
              blogs={this.state.menu[this.state.currentMenu].pages}
              showCatalogue={this.state.showCatalouge}
              updateShowCatalogue={this.updateShowCatalogue}
            />
          </Paper>
        </Container>
      </div>
    )
  }
}