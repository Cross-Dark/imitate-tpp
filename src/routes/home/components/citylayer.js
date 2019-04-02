import React, { Component } from 'react';
import './citylayer.css';
import request from '../../../helps/request';
import PropTypes from 'prop-types';

class CityLayer extends Component {
    
        state = { 
            hot:[],
            all: {}
         }
        
    componentWillMount(){
        this.getcity();
    }
    getcity = async () => {
        const data = await request('/city');
        const {hot, all} = data;
        this.setState({
            hot,
            all
        })
    }

    render() {  
        const {onClose, onSelect} = this.props;
        const {hot,all} = this.state;
        const allcity = Object.keys(all);
        return ( 
            <div className = "city">
                <div className="city_title">
                    <div className="city_close" onClick = {onClose}>关闭</div>
                    选择城市
                </div>
                <div className="city_content">
                    <div className="cityblock" id='定位'>
                        <div className="cityblock_lab">城市定位</div>
                        <div className="cityblock_warp">
                            <div className="city_item" onClick = {() => onSelect('杭州')}>杭州</div>
                        </div>
                    </div>
                    <div className="city_block" id="热门">
                        <div className="cityblock_lab">热门城市</div>
                        <div className="cityblock_warp">
                            {hot.map( city => <div key={city.cityCode} className="city_item" onClick = {() => onSelect(city.regionName)} >{city.regionName}</div>)}    
                        </div>
                    </div>
                    {allcity.map( citynum => {
                        const citys = all[citynum];
                        return  (<div className="city_list" id={citynum} key = {citynum}>
                                    <div className="citylist_lab">{citynum}</div>
                                    <ul className = 'citylist_warp'>
                                    {citys.map( citylist => <li key = {citylist.cityCode} className = "citylist_item" onClick = {() => onSelect(citylist.regionName)}>{citylist.regionName}</li>)} 
                                    </ul>
                                </div>)
                    } )}
                </div>
                <div className="city_index">
                    <ul className = 'cityindex'>
                        <li className = "cityindex_item"><a href="#定位">定位</a></li>
                        <li className = "cityindex_item"><a href="#热门">热门</a></li>
                        {allcity.map( citynum => {
                            return <li className = "cityindex_item" key = {citynum}><a href={`#${citynum}`}>{citynum}</a></li>
                        })}    
                    </ul>
                </div>
            </div>
         );
    }
}
CityLayer.protoTypes = {
    onClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
}; 
export default CityLayer;