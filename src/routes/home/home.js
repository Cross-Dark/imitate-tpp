import React, { Component } from 'react';
import './home.css';
import TopBar from './components/topbar';
import Slide from './components/slider';
import MovieItem from './components/moiveitem';
import TabMenu from '../../components/tabmenu';
import RenderToBody from '../../components/RenderToBody';
import CityLayer from './components/citylayer';
import request from '../../helps/request';

class Home extends Component {
    
    state = {
    city: '',
    poster: [],
    movie: [],
    citylayerVs: false
    } 
    
    showCityLayer = () => {
        this.setState( {
            citylayerVs: true
        });    
    }

    hideCityLayer = () => {
        this.setState( {
            citylayerVs: false   
        });
    }
    
    onChangeCity = (city) => {
        this.setState({
           city, 
        });
        this.hideCityLayer();
    }

    componentWillMount(){
        this.getdata();
    }
    getdata = async () => {
        const data = await request('/index');
        const {city, poster, movie} = data;
        this.setState({
            city,
            poster,
            movie
        });
    }
    getcity = async () => {
        const data = await request('/city');
        console.log(data);
    }

    render() { 
        const {city, movie, citylayerVs} = this.state;
        return (
            <div className = 'home'>
                <TopBar city = {city}  showCityLay = {this.showCityLayer}/>
                <div className = 'home_slider'>
                    <Slide />
                </div>
                <div className = 'home_content'>
                    {movie.map((item) => <MovieItem key = {item.name} data = {item}/>)}    
                </div>
                <TabMenu current = "movie"></TabMenu>
                <RenderToBody>
                    {citylayerVs &&<CityLayer onClose={this.hideCityLayer} onSelect={this.onChangeCity}/>}
                </RenderToBody>         
            </div>
          );
    }
}
 
export default Home;