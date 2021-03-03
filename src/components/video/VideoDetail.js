import React from 'react'
//This is the main video
const VideoDetail=(props)=>{
    //console.log('in videodetail');
    if(props.video==null){ //conditional rendering
        return <div></div>
    }
    const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
    return(<div>
        <br></br>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc}></iframe>    
        </div>

        <div className="ui segment">
            <h4>{props.video.snippet.title}</h4>
            <p><b>Description: </b>{props.video.snippet.description}</p>
        </div>
    </div>

    )
}
export default VideoDetail