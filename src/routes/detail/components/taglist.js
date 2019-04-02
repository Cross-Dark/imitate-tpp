import React from 'react';
import './taglist.css';

const TagList = ({data, current, onClick}) => {

    const onClickTag = (value) => {
        if (value !== current){
            onClick(value);
        }
    }

    return ( 
        <div className="taglist">
            {
                data.map(tag => (
                    <span className={`taglist_item ${current===tag.text && 'taglist_activ'}`} key={tag.text} onClick={()=>onClickTag(tag.text)} >{tag.text}{tag.count}</span>
                    ))
            }
           
        </div>
     );
}
 
export default TagList;