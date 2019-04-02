import React from 'react';
import './score.css';
import Start from '../../../components/start';

const Score = () => {
    return ( 
        <div className="score">
            <div className="score_top">
                <div className="score_item">
                    <div className="score_value">9.3<Start value={9.3}/></div>
                    <div className="score_title">观众评分279337人</div>
                </div>
                <div className="score_item">
                    <div className="score_value">80%</div>
                    <div className="score_title">V淘推荐度</div>
                </div>
                <div className="score_item">
                    <div className="score_value">87723</div>
                    <div className="score_title">想看人数</div>
                </div>
            </div>
            <div className="score_btn">
                <button className="scoreBtn_item scoreBtn_want"><i/>想看</button>
                <button className="scoreBtn_item scoreBtn_seen"><i/>看过</button>
            </div>    
        </div>
     );
}
 
export default Score;