import React from 'react';
import './index.css';
import LineLink from '../../components/linelink';
import TabMenu from '../../components/tabmenu';

const User = () => {
    return ( 
        <div className = 'user'>
            <div className="user_top">
                <div className="operator">
                    <div className="oper_set icon"></div>
                    <div className="oper_mess icon"></div>
                </div>
                <div className="user_info">
                    <div className="user_avator" style={{backgroundImage:'url(/img/lldq.jpg)'}}></div>
                    <div className="user_detail">
                        <div className="user_name line_ellipsis">樱木花道</div>
                        <div>
                            <span className= "user_fellow">关注 100</span>
                            <span className= "user_fans">被关注 10</span>
                        </div>
                        <div className="user_level">黄金会员</div>
                    </div>
                </div>
            </div>
            <div className="user_content">
                <LineLink title="收藏的电影" extra="10" href="#"/>
                <LineLink title="看过的电影" extra="20" href="#"/>
            </div>
            <TabMenu current = "user"></TabMenu>
        </div>
     );
}
 
export default User;