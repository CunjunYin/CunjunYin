import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/Home';
import BlogPage from './Blog/Blog';

interface MainProps {
  theme: string
}

interface MainState {
  theme: string
}


export default class Main extends React.Component<MainProps, MainState> {

  constructor(props: MainProps) {
    super(props);
    this.state = {
      theme: this.props.theme
    }
  }

  componentDidUpdate(prevProps: MainProps) {
    if (this.props.theme != prevProps.theme) {
      this.setState({theme: this.props.theme})
    }
  }

  render() {
    return (
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage theme={this.state.theme}/>} />
          </Routes>
        </Router>
      </main>
    )
  }
}