import React from 'react';
import photo from '../css/images/photo.png';

export default() => (
  <section id="about">
    <div className="section-image">
      <a className="link link-github">GitHub</a>
      <img className="profile-pic" src={photo} alt="profilepic" />
      <a className="link link-Email">E-mail</a>
    </div>
    <div className="section-text">
      <ul>
        <li>姓名 | 应祺</li>
        <li>手机 | 15257588420</li>
        <li>邮箱 | <a href="mailto:yingqi2008win@hotmail.com">yingqi2008win@gmail.com</a></li>
        <li>github | <a href="https://github.com/YingQQQ">点击进入</a></li>
        <li>所在地 | 杭州</li>
      </ul>
      <div>
        <p>我是一个爱学习，知上进，善沟通，重细节，懂感恩的人 <br />
        我喜欢研究所碰到的各种技术，不给自己设边界，有 Geek 精神。<br />
        我有时间概念，能在约定时间内保证完成任务。
        </p>
        <p>一年前端开发经验，熟悉 HTML、CSS、Javascript，能熟练开发符合
          W3C 标准的页面，以及面向对象的设计模式。熟练使用jQuery、zepto 框架，阅读过 jQuery、zepto源码,
          也写过jQuery插件</p>
        <p>对服务器端开发有一定了解，能够配合程序员完成相关工作</p>
      </div>
    </div>
  </section>
);
