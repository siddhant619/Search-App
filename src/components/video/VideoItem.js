import React from 'react'

import './VideoList.css'
class VideoItem extends React.Component{
    
    selectVideo=()=>{
        console.log('in selectvideo');
        //console.log(this.props.videoItem);
        this.props.displayVideo(this.props.onVideoSelect);

    }
    render(){
        /* console.log('in videoitem');
    console.log(this.props.videoItem); */
        return(<div className="item" onClick={()=>this.props.onVideoSelect(this.props.videoItem)}>
            <div className=" image">
                <img alt={this.props.videoItem.snippet.title} src={this.props.videoItem.snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
                <a className="header">{this.props.videoItem.snippet.title}</a>
                <div className="meta">
                    <span>Channel: {this.props.videoItem.snippet.channelTitle}</span>
                </div>
            </div>
        </div>
        )
    }

    
}

export default VideoItem