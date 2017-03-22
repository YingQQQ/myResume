import React, { Component } from 'react';
import { setStyle } from '../utils/setStyle';

const skills = 'first-javascript second-css third-html5 fourth-jquery first-react first-sass'.split(' ');

class Skill extends Component {
  constructor(props) {
    super(props);
    this.flag = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.addstyle = this.addstyle.bind(this);
  }
  componentDidMount() {
    this.nextElement = this.skill.nextElementSibling;
    const nextElementTop = this.nextElement.getBoundingClientRect().top;
    const nodeTop = this.skill.getBoundingClientRect().top;
    this.distance = -Math.abs(nextElementTop - nodeTop);
    window.addEventListener('scroll', this.handleScroll);
  }
  addstyle(remove) {
    const childrens = this.ul.childNodes;
    const spanNode = Array.from(childrens).map(node => node.firstChild);
    spanNode.forEach((node, i) => {
      const animationName = childrens[i].textContent === 'react' || childrens[i].textContent === 'sass' ? 'javascript' : childrens[i].textContent;
      setStyle(node, remove ? 'none' : animationName, '2', 'ease');
    });
  }
  handleScroll() {
    const nodeTop = this.skill.getBoundingClientRect().top;
    if (this.distance < nodeTop && nodeTop <= 450 && this.flag) {
      this.addstyle();
      this.flag = false;
    }
    if ((nodeTop < this.distance || nodeTop > 450) && !this.flag) {
      this.addstyle(true);
      this.flag = true;
    }
  }
  render() {
    return (
      <section id="skill" ref={(skill) => { this.skill = skill; }}>
        <div className="container">
          <div className="skill-title">
            <h1><span>专业技能</span></h1>
            <ul>
              <li>
                <a>
                  <div className="skill-description description-1">
                    <i>Bootstrap</i>
                  </div>
                  <div className="info rightToLeft">
                    <i>60%</i>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="skill-description description-2">
                    <i>Git</i>
                  </div>
                  <div className="info scale_up">
                    <i>60%</i>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="skill-description description-3">
                    <i>AJAX</i>
                  </div>
                  <div className="info roll_up">
                    <i>60%</i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="skill-text">
            <ul ref={(ul) => { this.ul = ul; }}>
              {
                skills.map(val =>
                  <li key={val}><span className={`skill-${val.split('-')[0]} skill-expand`} /><em>{val.split('-')[1]}</em></li>)
              }
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
