import React from 'react';
// import { a } from 'react-router-dom';

export default() => (
  <header>
    <nav>
      <ul>
        <a href="#about">个人简介</a>
        <a href="#work-skill">专业技能</a>
        <a href="/">项目经历</a>
        <a href="/">工作经历</a>
        <a href="/">联系方式</a>
      </ul>
    </nav>
    <div className="banner-text">
      <h1>Hello..!</h1>
    </div>
    <div className="banner-btn">
      <a href="#about" hideFocus="true" />
    </div>
  </header>
);
