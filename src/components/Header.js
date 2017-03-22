import React, { Component } from 'react';
import scroll from '../utils/scroll';
import { setStyle } from '../utils/setStyle';

const list = ['个人简介-#about', '专业技能-#skill', '工作经历-#experience', '项目经历-#dome'];

class Header extends Component {
  static onClick(e) {
    e.preventDefault();
    scroll(e.target.getAttribute('href'), {
      duration: 1200
    });
  }
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.flag = true;
  }
  componentDidMount() {
    this.nextElement = this.header.nextElementSibling;
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const elemTop = this.nextElement.getBoundingClientRect().top;
    if (elemTop <= 0 && this.flag) {
      setStyle(this.header.firstChild, {
        backGround: '#1a1819',
        position: 'fixed',
        top: 0,
      });
      this.flag = false;
    }
    if (elemTop > 0 && !this.flag) {
      setStyle(this.header.firstChild, {
        position: 'relative'
      });
      this.flag = true;
    }
  }
  render() {
    return (
      <header ref={(header) => { this.header = header; }}>
        <nav>
          <ul>
            {
              list.map((val) => {
                const newValue = val.split('-');
                return <a href={newValue[1]} key={val} onClick={Header.onClick}>{newValue[0]}</a>;
              })
            }
          </ul>
        </nav>
        <div className="banner-text">
          <h1>Hello..!</h1>
        </div>
        <div className="banner-btn">
          <a href="#about" onClick={Header.onClick} />
        </div>
      </header>
    );
  }
}


export default Header;
