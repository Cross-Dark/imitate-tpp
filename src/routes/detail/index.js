import React, { Component } from 'react';
import './index.css';
import BaseInfo from './components/baseinfo';
import Score from './components/score';
import FoldText from './components/foldtext';
import Artist from './components/artist';
import request from '../../helps/request';
import Comment from './container/comment';
import {Link} from 'react-router-dom';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            artist: []
         }
    }

    componentDidMount(){
        this.getArtist();
    }
    getArtist = async () => {
        const data = await request('/artist');
        if(data && data.length){
            this.setState({
                artist: data
            })
        }
    }

    render() { 
        const {artist} = this.state;
        return ( 
            <div className="detail">
                <div className="detail_top">
                    <div className="operator">
                        <Link to='/'>
                            <div className="icon oper_back"></div>
                        </Link>
                        <div className="icon oper_share"></div>
                    </div>
                    <BaseInfo></BaseInfo>
                </div>
                <div className="detail_content">
                    <div className="detail_moudel">
                        <Score></Score>
                    </div>
                    <div className="detail_moudel">
                        <FoldText height = '4'>
                            <div className="detailView">
                            太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新家园。然而宇宙之路危机四伏，为了拯救地球，为了人类能在漫长的2500年后抵达新的家园，流浪地球时代的年轻人挺身而出，展开争分夺秒的生死之战。
                            </div>
                        </FoldText>   
                    </div>
                    <div className="detail_moudel">
                        <h3 className="moudel_title">演职人员</h3>
                        <Artist data={artist}></Artist>
                    </div>
                    <div className="detail_moudel">
                        <h3 className="moudel_title">热门评论</h3>
                       <Comment></Comment>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Detail;