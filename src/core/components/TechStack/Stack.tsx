import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TaxonomyType } from '../../types';
import "./line.scss"

interface StackProps {
  value: TaxonomyType,
  click: (e: any) => void
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
    console.log(e)
  }


  render() {
    return (
      <>
        <div className="shuffle-item" style={{
            height: this.props.value.height,
            width: this.props.value.width,
            top: this.props.value.top,
            left: this.props.value.left,
          }} onClick={()=>{ this.props.click(this.props.value)}}>
          <div
            className={`shuffle-content p-4 ${this.state.active}`}
            onMouseEnter={this.handleOnMouseEnter}
            onMouseLeave={this.handleOnMouseLeave}
            style={{ background: this.props.value.background }}
          >
            <h2 className='title'>
              {this.props.value.name}
              <div className='line-break'>
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='line'></span>
                <span className='dot'></span>
                <span className='dot'></span>
              </div>
            </h2>


            <div className='description'>
              React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
            </div>

            <div className='enter'>
            </div>
          </div>
        </div>
      </>
    )
  }
}