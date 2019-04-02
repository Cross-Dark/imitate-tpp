import React from 'react';
import "./moiveitem.css";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieItem = ({data}) => {
    return ( 
        <div className = "movieItem">
            <div className = "movie_poster">
                <img src = {data.poster} alt = ""></img>
            </div>
            <Link to='/detail'>
                <div className = "movie_detail">
                    <div className = "movie_name">{data.name}</div>
                    <div className = "movie_score">观众评分
                        <span>{data.score.toFixed(1)}</span>
                    </div>
                    <div className = "movie_director">导演: {data.director}</div>
                    <div className = "movie_actor">演员: {data.actor}</div>
                    <div className = "movie_tag">
                        {
                            data.tags.map((tag, i) =>{
                                if(i%2){
                                    return <span key ={tag} className = "tp_tag blue">{tag}</span>
                                }
                                return <span key ={tag} className = "tp_tag red">{tag}</span>
                            })
                        }
                    </div>
                </div>
            </Link>
            
            <div className = "movie_btn">
                <button className = "tp_btn">购票</button>
                <span className = "movie_price">{data.price}元</span>
            </div>
        </div>
     );
}
MovieItem.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default MovieItem;