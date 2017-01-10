import { WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import style from './InfoList.less';



const InfoList = ({ ...items }) => {
  let { dataList } = { ...items } || [];
  if (!dataList) {
    dataList = [];
  }
  return (
    <div>
      {
        dataList.map((ele, index) => (
          <div className={style.item} key={ele.id}>
            <figure>
              <img src="http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr" alt=""/>
            </figure>
            <section className={style.content}>
              <header>
                <p className={style.title}>{ele.title}</p>
                <p className={style.time}>{ele.time}</p>
              </header>
              <article>
                <span className={style.infoTitle}>{ele.contentTitle}</span>
                <span className={style.infoContent}>{ele.content}</span>
              </article>
            </section>
          </div>
        ))     
      }
    </div>
  )
};

export default InfoList;
