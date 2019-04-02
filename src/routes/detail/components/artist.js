import React from 'react';
import './artist.css';

const Artist = ({data}) => {
    return ( 
        <div className="artist">
            <ul className="artist_list">
                {
                    data.map(item => (
                        <li className="" key={item.name}>
                            <a href="#" className="artist_info">
                                <div className="artist_img" style={{backgroundImage:`url(${item.image})`}}></div>
                                <div>
                                    <dl className="artist_name">{item.name}</dl>
                                    <dd className="artist_job">{item.job}</dd>
                                </div>
                            </a>
                        </li>
                    ))
                }
                

                
            </ul>
        </div>
     );
}
 
export default Artist;