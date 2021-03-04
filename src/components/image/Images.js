import React,{useState,useEffect} from 'react'
import unsplash from '../../apis/unsplash'
import ImageList from './ImageList'

const Images = ({searchTerm}) => {
    const [images,setImages]=useState([]);
    const [page, setPage] = useState(1);

    const search=async ()=>{
        try{
            const response=await unsplash.get('/search/photos',{//axios returns a promise so we can use.... then/catch or async/await!
                params:{
                    query: searchTerm, 
                    per_page:10,
                    page:page
                
                },

            });
            //console.log(response.data.results);
          //  console.log(this);
            //this.setState({imgs:[...response.data.results] })
            setImages([...response.data.results]);
        }
        catch(err){
            console.log(`We got error :( - ${err}`);
        }
    }

    useEffect(() => {
        
        search();
    }, [searchTerm])

    useEffect(() => {
        if(searchTerm)
            search();
    
    }, [page]);
    const handlePrev=()=>{
        if(page>1)
            setPage(prevPage=>prevPage-1);
    }
    const handleNext=()=>{
        //console.log('next');
        setPage(prevPage=>prevPage+1);
    }

    return (
        <div>
            <div className="content">
            {images.length===0?null:
            <React.Fragment> 
                        <i class="big arrow alternate circle left icon " onClick={handlePrev}></i>
                        <i class="big arrow alternate circle right icon" onClick={handleNext}></i>
            </React.Fragment>
            } 
            </div>  
            {/* <div className="ui hidden divider"></div> */}
            <div className="ui item">
            <ImageList images={images}/>
            </div>
            
        </div>
    )
}

export default Images
