import React from 'react';
import { TaxonomyType } from '../../types';
import Stack from './Stack'
import "./tech.scss"

interface position {
  top?: number,
  left?:number,
  bottom?:number,
  right?:number,
  width:number,
  height:number,
}

interface StacksProps {
  data: TaxonomyType[],
  click: (e: any) => void;
}

interface StacksState {
  isLoading: boolean,
  overlayStyle:position
}

export default class Stacks extends React.Component<StacksProps, StacksState> {

  constructor(props: StacksProps) {
    super(props);
    this.state = {
      isLoading: true,
      overlayStyle: {
				width:200,
				height:200,
			}
    };

    this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
  }


  componentDidMount(){
  }

  handleOnMouseMove(e: any) {
	}

  render() {
    return (
      <div className='shuffler' style={{
        height:550
      }} onMouseMove={this.handleOnMouseMove}>
        {
          this.props.data.map((item, index) => (
            <Stack value={item} key={index} click={this.props.click}/>
          ))
        }
       
      </div>
    )
  }
}