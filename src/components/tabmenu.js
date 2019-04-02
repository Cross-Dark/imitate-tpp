import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import "./tabmenu.css";

const TabMenu = ({current}) => {
    return ( 
        <div className = "tabMeanu">
            <Link to='/' className = {`tabMeanu_btn ${current === 'movie' && 'btn_active'}`}>
                <i className = "tabMeanu_icon movie"></i>
                <span className = "tabMeanu_text">电影</span>
            </Link>
            <Link to='/user' className = {`tabMeanu_btn ${current === 'user' && 'btn_active'}`}>
                <i className = "tabMeanu_icon me"></i>
                <span className = "tabMeanu_text">我的</span>
            </Link>
        </div>
     );
}
TabMenu.propTypes = {
    current: PropTypes.string.isRequired,
}
 
export default TabMenu;

