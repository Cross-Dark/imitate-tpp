import React from 'react';
import './scorelist.css';
import '../../../components/start';
import Start from '../../../components/start';

const ScoreList = () => {
    return ( 
        <div className="scorelist">
             <div className="scorelist_sco">
                <div className="scorelist_val">9.3分</div>
                <div className="scorelist_desc">10000人评</div>
             </div>
             <div className="scorelist_star">
                <div>
                    <div className="start_item">
                        <Start value={10} size={8}/>
                        <div className="startItem_btm">
                            <div className="startItem_top" style={{width: '90%'}}></div>
                        </div>
                    </div>
                    <div className="start_item">
                        <Start value={8} size={8}/>
                        <div className="startItem_btm">
                            <div className="startItem_top" style={{width: '70%'}}></div>
                        </div>
                    </div>
                    <div className="start_item">
                        <Start value={6} size={8}/>
                        <div className="startItem_btm">
                            <div className="startItem_top" style={{width: '40%'}}></div>
                        </div>
                    </div>
                    <div className="start_item">
                        <Start value={4} size={8}/>
                        <div className="startItem_btm">
                            <div className="startItem_top" style={{width: '30%'}}></div>
                        </div>
                    </div>
                    <div className="start_item">
                        <Start value={2} size={8}/>
                        <div className="startItem_btm">
                            <div className="startItem_top" style={{width: '10%'}}></div>
                        </div>
                    </div>   
                </div>
             </div>
        </div>
     );
}
 
export default ScoreList;