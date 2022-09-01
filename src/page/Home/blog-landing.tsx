import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Write } from './img/write.svg';

export default class BlogLanding extends React.Component {

  handleOnClick(){

  }

  render() {
    return (
        <div className='blog-landing'>
          <div className='info'>
            <h1 className='title'>Blogs</h1>
            <h3> Moving forward, vision for the future</h3>
            <div className="desc">
              The Blog mainly record what I have learned, if you are interested, you can click the button below to read.
              <p>Please contact me for any mistakes.</p>
            </div>

            <Link to="/blog">
              <div className='button'>
                <button className='btn btn-primary' onClick={this.handleOnClick}>Read More</button>
              </div>
            </Link>
          </div>
          <div className='figure'>
            <Write></Write>
          </div>
        </div>
    )
  }
}