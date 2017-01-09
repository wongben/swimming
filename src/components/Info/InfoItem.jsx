import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import InfoList from './InfoList';
import style from './InfoItem.less';

const TabPane = Tabs.TabPane;
const arr = Array.of({name:"选项卡1",key:1},{name:"选项卡2",key:2},{name:"选项卡4",key:3});

function callback(dispatch) {
  dispatch(
    {
      type: 'infos/fetchInfo',
      payload:1
    });
}

const TabExample = ({dispatch,...info}) => {
  const { infos } = {...info};
  if(infos.data && infos.data.dataList && infos.data.dataList.length > 0){
    return (
      <div>
          <Tabs defaultActiveKey="0" onChange={callback.bind(this,dispatch)} >
            {
              infos.data.dataList.map((ele,index) => (
                <TabPane tab={ele.name} key={index} className = {style.item}>
                    <InfoList {...ele}/>
                </TabPane>))
            }
          </Tabs>
          <WhiteSpace />
        </div>
    )
  }else{
    return (
      <div></div>
    )
  }
  
}
      

export default TabExample;
