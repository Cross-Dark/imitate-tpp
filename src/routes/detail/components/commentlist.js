import React from 'react';
import "./commentlist.css";
import Start from '../../../components/start';
import FoldText from './foldtext';



const CommentList = ({data}) => {
    return (
        <ul className="commentItem">
            {
                data.map(comment => (
                    <li key={comment.id}>
                        <div className="commentlist">
                            <div className="listuser">
                                <div className="listuser_avator" style={{backgroundImage: 'url(//gw.alicdn.com/i2/TB11IoeMVXXXXasXFXXXXXXXXXX_.jpg_100x100q50.jpg)'}}></div>
                                <div className="listuser_detail">
                                    <div className="listuser_name">{comment.name}</div>
                                    <div className="listuser_score">
                                        <Start value={comment.score} size={10}></Start>
                                        <span className="list_score">{comment.score}</span>
                                    </div>
                                </div>
                            </div>
                            <FoldText height='4'>
                               {comment.content}
                            </FoldText>
                            <div className="comment_detial">
                                <div className="comment_time">{comment.time}</div>
                                <div className={`comment_zan ${ comment.isZan && 'zan_active'}`}>
                                    <i/>{comment.zan}
                                </div>
                            </div>
                        </div>
                    </li>
                ))
            }
            
        </ul> 
     );
}
 
export default CommentList;