import React from 'react';

export default() => (
  <section id="work-skill">
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
        <ul>
          <li><span className="skill-first skill-expand" /><em>javascript</em></li>
          <li><span className="skill-second skill-expand" /><em>css</em></li>
          <li><span className="skill-third skill-expand" /><em>html5</em></li>
          <li><span className="skill-fourth skill-expand" /><em>JQUERY</em></li>
          <li><span className="skill-first skill-expand" /><em>React</em></li>
          <li><span className="skill-first skill-expand" /><em>sass</em></li>
        </ul>
      </div>
    </div>
  </section>
);
