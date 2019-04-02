import React, { Component } from 'react';
import './comment.css';
import ScoreList from '../components/scorelist';
import TagList from '../components/taglist';
import CommentList from '../components/commentlist';
import request from '../../../helps/request';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tags: [],
            comments: [],
            current: ''
         }
    }

    componentDidMount(){
        this.getdata();
    }

    getdata = async () => {
        const {tags, list} = await request('/comment');
        this.setState({
            tags: tags,
            comments: list,
            current: tags[0] ? tags[0].text : ''
        });
    }

    changeTag = value => {
        this.setState({
            current: value
        });
    }
    toggleZan = value =>{
        
    }

    render() { 
        const {tags, comments, current} = this.state;
        const filterComment = comments.filter(ele => (ele.tag === current))
        return ( 
            <div className="comment">
                <ScoreList></ScoreList>
                <div className="comment_tag">
                    <TagList data={tags} current={current} onClick={this.changeTag} ></TagList>
                </div> 
                <CommentList data={filterComment} onZan = {this.toggleZan}></CommentList>   
            </div>
         );
    }
}
 
export default Comment;