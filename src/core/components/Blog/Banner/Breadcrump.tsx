import React from 'react';

import { BreadcrumbMeta } from '../../../../types'

interface BreadcrumpProps {
    breadcrump: BreadcrumbMeta
}

export default class Breadcrump extends React.Component<BreadcrumpProps> {

  render() {
    return (
        <div className='tag'>
            { this.props.breadcrump.title }
        </div>
    )
  }
}