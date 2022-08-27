import React from 'react';
import Tags from './Tags';
import Breadcrump from './Breadcrump'
import { BreadcrumbMeta } from '../../../../types'

import './banner.scss'

interface BannerProps {
  title: string
  date: string
  tags: string[],
  breadcrumps: BreadcrumbMeta[]
}

export default class Banner extends React.Component<BannerProps> {

  render() {
    return (
      <section className='banner mb-5' >
        <div className='container'>
          <div className='title'>
            {this.props.title}
          </div>

          <div className='tags'>
            {
              this.props.tags.map((tag, index) => (
                <Tags tag={tag} key={index} />
              ))
            }
          </div>

          <div className='breadcrumps'>
            {
              this.props.breadcrumps.map((breadcrump, index) => (
                <Breadcrump breadcrump={breadcrump} key={index} />
              ))
            }
          </div>
        </div>
      </section>
    )
  }
}