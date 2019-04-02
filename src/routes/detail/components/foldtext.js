import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './foldtext.css';

class FoldText extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFold: false,
            isNeedFold: false
         }
    }


    componentDidMount(){
        const dom = ReactDOM.findDOMNode(this);
        const value = this.props.height*21 || 84;
        // console.log(value);
        // console.log(dom.clientHeight);

        if(dom.clientHeight > value){
            this.setState({
                isFold: true,
                isNeedFold: true
            })
        }
    }

    togglefold = () =>{
        if(this.state.isNeedFold){
            this.setState(prevState => ({
                isFold : !prevState.isFold
            }));
        }    
    }
    render() { 
        const {isFold} = this.state;
        const cls = isFold ? 'foldtext_big' : '';
        const mh = isFold ? this.props.height*21+'px' : 'auto';
        return ( 
            <div className={`foldtext ${cls}`} style={{height: mh}} onClick={this.togglefold}>
                {this.props.children}
                {this.state.isFold && <div className = 'foldtext_lab'>展开</div>}
            </div>
         );
    }
}
 
export default FoldText;

