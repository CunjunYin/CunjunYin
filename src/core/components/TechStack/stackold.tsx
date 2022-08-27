import React from 'react';
import { TaxonomyType } from '../../types';
import "./triangle.scss"

interface StackProps {
  value: TaxonomyType
}

interface StackState {
  isLoading: boolean,
  active: string
}

export default class Stack extends React.Component<StackProps, StackState> {

  constructor(props: StackProps) {
    super(props);
    this.state = {
      isLoading: true,
      active: ''
    };
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter(e: any) {
    this.setState({ active: "active" });
  }

  handleOnMouseLeave(e: any) {
    this.setState({ active: "" });
  }

  handleChangeValue(e: any) {

  }


  render() {
    const size = this.props.value.height/2;
    return (
      <>
        <div className="shuffle-item" style={
          {
            height: this.props.value.height,
            width: this.props.value.width,
            top: this.props.value.top,
            left: this.props.value.left,
          }
        }>
          <div
            className={`shuffle-content p-4 ${this.state.active}`}
            onMouseEnter={this.handleOnMouseEnter}
            onMouseLeave={this.handleOnMouseLeave}
            style={{ background: this.props.value.background }}
          >
            <h2 className='title'>
              {this.props.value.name}
            </h2>

            <div className='description'>
              React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
            </div>

            <div className='enter'>
              <svg className="triangle-svg" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{
                  width:size,
                  height:size
                }}>
                <polygon className="st0" points= {`${size},0 ${size},${size} 0,${size}`}/>
                <text transform="matrix(1 0 0 1 30.0037 61.2585)" className="st2 st3 st4">Tour</text>
              </svg>
            </div>
          </div>
        </div>
      </>
    )
  }
}