import { WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import style from './InfoList.less';



const InfoList = ({ items }) => {
  const { dataList } = { items };
  console.log('dataList', dataList);
  return (
    <div className={style.item}>
      <figure>
        <img src="http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr" alt=""/>
      </figure>
      <section className={style.content}>
        <header>
          <p className={style.title}>WSH</p>
          <p className={style.time}>1970</p>
        </header>
        <article>
          <span className={style.infoTitle}>11</span>
          <span className={style.infoContent}>11</span>
        </article>
      </section>
    </div>
  )
};

export default InfoList;
