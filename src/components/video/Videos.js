import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import youtube from '../../apis/Youtube'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

 const Videos = ({searchTerm}) => {
    const [videoList,setVideoList]=useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [currPageToken, setCurrPageToken] = useState('');
    const [nextPageToken, setNextPageToken] = useState('');
    const [prevPageToken, setPrevPageToken] = useState('');
    const location = useLocation();
    const search=async ()=>{
        console.log('in vid search', searchTerm);
        try {
            const response =await youtube.get('/search',{
                params:{
                    q:searchTerm,
                    pageToken:currPageToken
                }
            });
            console.log(response);
            //console.log(response.data.nextPageToken);
            /* this.setState({videoList:response.data.items, nextPageToken:response.data.nextPageToken,
                prevPageToken:response.data.prevPageToken===undefined? '':response.data.prevPageToken
                ,selectedVideo:response.data.items[0]}); */
            //console.log(`curr pg ${this.state.currpageToken}`);
            //console.log(`next pg ${this.state.nextPageToken}`);
            setVideoList(response.data.items);
            setSelectedVideo(response.data.items[0]);
            setNextPageToken(response.data.nextPageToken);
            response.data.prevPageToken===undefined? setPrevPageToken(''):setPrevPageToken(response.data.prevPageToken);

   
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        
        if(searchTerm && location.pathname==="/videos")
            search();
        
    }, [searchTerm]);

    const onVideoSelect=(video)=>{
        //console.log('in onvid select app.js');
       // console.log(video);
        //this.setState({selectedVideo:video})
        setSelectedVideo(video)
    }
    useEffect(() => {
        console.log('useeff curr');
        if(searchTerm)
        search();
    }, [currPageToken])

    /* useEffect(() => {
        console.log('useeff prev');
        setCurrPageToken(nextPageToken);
    }, [prevPageToken]) */

    /* useEffect(() => {
        console.log('useeff next');
        setCurrPageToken(prevPageToken);
    }, [nextPageToken]) */


    const handleNext=()=>{
        console.log('handle next');
        //setPrevPageToken(currPageToken);
        setCurrPageToken(nextPageToken);
    }
    
    const handlePrev=()=>{
        //setNextPageToken(currPageToken);
        setCurrPageToken(prevPageToken);
    }
    return (
        <div>
            
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                    {videoList.length===0?null:
                    <React.Fragment> 
                        <i class="big arrow alternate circle left icon " onClick={handlePrev}></i>
                        <i class="big arrow alternate circle right icon" onClick={handleNext}></i>
                    </React.Fragment>
                    }
                        <VideoList videoList={videoList} onVideoSelect={onVideoSelect}  />
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Videos