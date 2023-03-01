import React from 'react';
import {
  Button,
  Container,
  Drawer,
  Paper
} from '@mui/material';
import { Catalogue } from './Paper'
import { SideMenu } from './BlogMenu';
import { MenuType } from './Types/MentType';
import { menu } from './menu';
import './Blog.scss'

interface BlogPageProps {
  theme: string
}

interface BlogPageState {
  isDrawerOpen: boolean,
  showCatalouge: boolean
  currentMenu: MenuType,
  theme: string
}

export default class BlogPage extends React.Component<BlogPageProps, BlogPageState>{

  constructor(props: BlogPageProps) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      showCatalouge: true,
      currentMenu: menu.children[0],
      theme: this.props.theme,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleMenuUpdate = this.handleMenuUpdate.bind(this);
    this.updateShowCatalogue = this.updateShowCatalogue.bind(this);
  }

  componentDidUpdate(prevProps: BlogPageProps) {
    if (this.props.theme != prevProps.theme) {
      this.setState({theme: this.props.theme})
    }
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

  handleMenuUpdate(menu: MenuType): void {
    this.setState({
      currentMenu: menu,
      showCatalouge: true
    });
  }

  updateShowCatalogue(state: boolean) {
    this.setState({
      showCatalouge: state
    });
  }

  render() {
    return (
      <div className='page-blog'>
        <Container>
          <Button
            className="menu-opener"
            onClick={(e: any) => { this.toggleDrawer('left', true, e) }}
          >
            <div className='menu-icon'>Menu</div>
          </Button>
          <Drawer
            anchor='left'
            open={this.state.isDrawerOpen}
            onClose={(e: any) => { this.toggleDrawer('left', false, e) }}
          >
            <SideMenu menu={menu} updateMenu={this.handleMenuUpdate}></SideMenu>
          </Drawer>
          <Paper elevation={3}>
            <Catalogue
              blogs={this.state.currentMenu.children}
              showCatalogue={this.state.showCatalouge}
              updateShowCatalogue={this.updateShowCatalogue}
            />
          </Paper>
        </Container>
      </div>
    )
  }
}