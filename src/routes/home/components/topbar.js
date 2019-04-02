import React, { Component } from 'react';
import './topbar.css';

class TopBar extends Component {
    
    render() { 
        return ( 
            <div className = 'topBar'>
                <div className = 'topBar-city' onClick = {this.props.showCityLay}> {this.props.city} </div>
                <div className = 'topBar-sreach'></div>
                <div className = 'topBar-scan'></div>
            </div>
         );
    }
}
 
export default TopBar;

