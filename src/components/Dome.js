import React from 'react';

export default() => (
  <section id="dome">
    <div className="dome-container">
      <div className="dome-title">
        <h1>项目经验</h1>
      </div>
      <div className="dome-main">
        <ul>
          <li>
            <div className="dome-logo logo_1" />
            <a href="https://github.com/YingQQQ/RewriteZepto">Rewrite-Zepto</a>
            <p>用ES6重写一边Zepto.js。项目为独立开发项目。</p>
          </li>
          <li>
            <div className="dome-logo logo_2" />
            <a href="https://github.com/YingQQQ/weixin-official-account">Movies</a>
            <p>一个电影赏析的公众号。项目为独立开发项目。</p>
          </li>
          <li>
            <div className="dome-logo logo_3" />
            <a href="https://github.com/YingQQQ/React-Blog">博客</a>
            <p>前台使用react,后台Koa2,数据使用mongodb。项目为独立开发项目还未上线。</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
