import React from 'react';
import './baseinfo.css';

const BaseInfo = () => {
    return ( 
        <div className= "baseinfo">
            <div className="info_detail">
                <h3 className="info_name">流浪地球</h3>
                <div className="info_title">The Wandering Earth</div>
                <div className="info_other">科幻 / 动作 / 剧情</div>
                <div className="info_other">中国大陆 | 130分钟</div>
                <div className="info_other">2019年2月大陆上映</div>
            </div>
            <div className="info_poster" style={{backgroundImage:'url(//gw.alicdn.com/i2/TB1DKsvErvpK1RjSZPiXXbmwXXa_.jpg_400x400Q30.jpg)'}}></div>
        </div>
     );
}
 
export default BaseInfo;