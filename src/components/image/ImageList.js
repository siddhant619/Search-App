import './ImageList.css'
import ImageCard from './ImageCard'
import React from 'react'


const ImageList= (props)=>{
    //console.log(props.images);
    const imageTags= props.images.map( (image)=>{
        return <ImageCard image={image} key={image.id}  />;
    } );
    //console.log('in imglist.js')
    //console.log(imageTags);//gives of array of react elements. Actually we returned jsx in map method above.
    return ( <div className="image-list">
        
        {imageTags}
        </div>
    )
}

export default ImageList