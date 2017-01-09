import { WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import style from './InfoList.less';

//const arr = Array.of({name:"选项卡1",key:1},{name:"选项卡2",key:2},{name:"选项卡3",key:3});


const TabExample = ({...item}) => {
    return(
      <div className = {style.item}>
        <figure>
            <img src="http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr" alt=""/>
        </figure>
        <section className={style.content}>
            <header>
                <p className={style.title}>{item.title}</p>
                <p className={style.time}>{item.time}</p>
            </header>
            <article>
                <span className={style.infoTitle}>{item.contentTitle}</span>
                <span className={style.infoContent}>{item.content}</span>
            </article>
        </section>
      </div>
)};

export default TabExample;
