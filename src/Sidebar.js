import React from 'react';
import './style.css';
import { Radio, Checkbox } from 'react-bootstrap';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showInput: false
    }
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput() {
    this.setState(prevState => ({
      showInput: !prevState.showInput
    }))
  }

  render() {
    const { showInput } = this.state;
    const input = showInput ? 'show' : 'hide'

    return (
      <div className="sidebar">

        {/*menu-item*/}

        <Radio name='item' className={input}>
          <div className="menu-item">
            Menu item 1
          </div>
        </Radio>

        <Radio name='item' className={input}>
          <div className="menu-item">
            Menu item 2
          </div>
        </Radio>

        {/*dropdown 1*/}
         
        <Checkbox className={input}>
          <div className="menu">
            <div className="menu-item">
              Dropdown 1 <FaChevronRight />
            </div>

            {/*sub-menu*/}

            <div className="sub-menu">
              <Radio name='item' className={input}>
                <div className="sub-menu-item">
                  Menu item 3
                </div>
              </Radio>

              <Radio name='item' className={input}>
                <div className="sub-menu-item">
                  Menu item 4
                </div>
              </Radio>

              <Radio name='item' className={input}>
                <div className="sub-menu-item">
                  Menu item 5
                </div>
              </Radio>

              <Radio name='item' className={input}>
                <div className="sub-menu-item">
                  Menu item 6
                </div>
              </Radio>
            </div>
          </div>
        </Checkbox>

        {/*dropdown 2*/}

        <Checkbox className={input}>
          <div className="menu">
            <div className="menu-item">
              Dropdown 2 <FaChevronRight />
            </div>

            {/*sub-menu*/}

            <div className="sub-menu">
              <Radio name='item' className={input}>
                <div className="sub-menu-item">
                  Menu item 7
                </div>
              </Radio>

              <Radio name='item' className={input}>
                <div className="sub-menu-item">
                  Menu item 8
                </div>
              </Radio>
            </div>
          </div>
        </Checkbox>

        {/*hide-show-input-btn*/}
      
        <div className="btn-toggle-input" onClick={this.toggleInput}>
          click here to {!showInput ? 'show' : 'hide'} inputs
        </div>
      </div>
      )
  }
}

export default Sidebar;