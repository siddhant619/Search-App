import { render } from '@testing-library/react'

import React from 'react'


class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0};
        this.imageRef=React.createRef();//assigning ref to instance variable imageRef
    }
    setSpan=()=>{
        const height=(this.imageRef.current.clientHeight); 
        const spans=Math.ceil(height/10 );//gives no. of spans required( grid-auto-rows: 10px)
        this.setState({spans:spans});//update span
        console.log('in setspan');
        //this.imageRef.current.style.gridRowEnd="span "+this.state.spans;
    }
    componentDidMount(){
        //console.log(this.imageRef);//this gives the image element(actually this.imageRef.current)
        //console.log(this.imageRef.current.clientHeight);//TOO EARLY TO ACCESS HEIGHT HERE COZ img takes time to download form url.
        //this.imageRef.current.addEventListener('load',this.setSpan);//current has the actual img element
    }
    
    render(){
        //console.log('in imagecard.js')
    return (<div style ={{gridRowEnd:`span ${this.state.spans}` }} >
            <img ref={this.imageRef} onLoad={this.setSpan} alt={this.props.image.description}  src={this.props.image.urls.regular}  />
         </div>
    );
    }

}
export default ImageCard