import React from 'react';

export default() => (
  <section id="experience">
    <div className="experience-container">
      <div className="experience-title">
        <h1>工作经历</h1>
      </div>
      <div className="experience-main">
        <ul className="experience-time">
          <li>2009.09-2013.06</li>
          <li>2014.12 - 2015.02</li>
          <li>2016.03 - Now</li>
        </ul>
        <div className="timeline" />
        <ul className="experience-text">
          <li>
            <span>绍兴文理学院元培学院</span>
            <span>国际经济与贸易</span>
          </li>
          <li>
            <span>杭州市双静网络公司</span>
            <span>负责卖家在平台的日常运营和管理工作，</span>
            <span>包括问题解决、指标监控、营销活动、</span>
            <span>线上推广等</span>
          </li>
          <li>
            <span>负责网站交互设计、网站前端界面实现</span>
            <span>与甲方交涉、与甲方讨论及分析需求、流程、</span>
            <span>可行性评估等</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
