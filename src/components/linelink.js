import React from 'react';
import './linelink.css'

const LineLink = ({href, title, extra}) => {
    return ( 
        <a href={`${href}`} className="linelink">
            <div className="line_title">{title}</div>
            <div className="line_extra">{extra}</div>
            <i className="line_arrow"></i>
        </a>
     );
}
 
export default LineLink;