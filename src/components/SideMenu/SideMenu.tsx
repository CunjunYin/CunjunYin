import React from 'react';
import MenuItem from './MenuItem'

interface MenuProps {
  className?: string,
  menu: any,
  hasParent: boolean
}

interface MenuState {
  isLoading: boolean
  scrollClass: string
}

export default class SideMenu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);

    this.state = {
      isLoading: true,
      scrollClass: '',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = '';
      if(window.scrollY > 256){
        activeClass = ' fixed';
      }
      this.setState({ scrollClass: activeClass });
    });
  }

  render() {
    var extraClass = this.props.className ? this.props.className : '';
    return (
      <div className={`sidebar ${extraClass}${this.state.scrollClass}`}>
        <div className='menu-header mb-3'>
          <div className="search-container">
            <input type="text" className="hide" placeholder="Quick Search ..."/>
          </div>
        </div>
        <div className='menu-body'>
          {
            this.props.menu.children.map((item: any, index: number) => (
              <MenuItem item={item} key={index} index={index}></MenuItem>
            ))
          }
        </div>
      </div>
    )
  }
}