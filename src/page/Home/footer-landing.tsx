import React from 'react';
import { ReactComponent as Business } from './img/business.svg';

export default class FooterLanding extends React.Component {

  handleOnClick() {

  }

  render() {
    return (
      <div className='footer-landing'>
        <Business></Business>
        <div className='licence'>
          <span>© 2022 Cunjun Yin</span>
        </div>
      </div>
    )
  }
}