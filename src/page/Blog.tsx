import React from 'react';
import { Drawer } from '@mui/material';
import Blog from '../core/components/Blog/Blog';

export default class BlogPage extends React.Component {

  handleMenuClick(e: any) {

  }


  render() {
    return (
      <div className='page-blog'>
        <Drawer>
        </Drawer>
        <Blog />
      </div>
    )
  }
}