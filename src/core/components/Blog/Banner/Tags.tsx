import React from 'react';

interface TagsProps {
    tag: string
}

export default class Tag extends React.Component<TagsProps> {

  render() {
    return (
        <div className='tag'>
            { this.props.tag }
        </div>
    )
  }
}