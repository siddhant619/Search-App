import React, { useEffect, useState } from 'react';
import axios from 'axios'
import wiki from '../../apis/wiki'


const Articles = ({searchTerm}) => {
    const [results,setResults]=useState([]);
    const [page, setPage] = useState(0);
    const [isNext,setIsNext]=useState(1);//if isNext===1 next result page avaliable.
    //console.log('I RUN WITH EVERY RENDER');
    //console.log(results);//this runs twice for each letter entered- once coz term state changes, 2nd when api is called and results state changes(after delay completed)
    const search= async()=>{
        try{
            //console.log('request made');
            const {data}=await wiki.get('',{
                params:{
                    
                    srsearch:searchTerm,
                    sroffset:page
                }
            })
            //console.log('from wiki',data,page);
            if(!data.continue)
                setIsNext(0);
            else
                setIsNext(1);
            setResults(data.query.search);
        }
        catch(e){
            console.log('oh no');
        }

    }

    useEffect(()=>{ 
        //console.log('Initial render or term update');
        if(searchTerm){ //this occurs for 1st render- where term= programming but result array is empty, so make a request without a delay
            if(page>0)
                setPage(0);
            else
                search();
        }
        
    }, [searchTerm]);

    const renderedResults= results.map ((result)=>{
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button" target="_blank">
                    Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            
            </div>
        );
    } )
    useEffect(() => {
        if(searchTerm )
            search();
    
    }, [page]);
    const handlePrev=()=>{
        if(page>0)
            setPage(prevPage=>prevPage-10);
    }
    const handleNext=()=>{
        setPage(prevPage=>prevPage+10);
    }
    return (
        <div>
            
            <div className="ui celled list">
            {!searchTerm?null:
            <React.Fragment>
                        <div className="ui icon buttons"> 
                            <button className={`ui  button ${page===0?'disabled':''}`} onClick={handlePrev}>
                                <i className={`arrow alternate  left icon`} ></i>
                                Previous
                            </button>
                            <button className={`ui  button ${isNext?'':'disabled'} `}  onClick={handleNext}>
                                <i className={` arrow alternate  right icon `} ></i>
                                    Next
                                
                            </button>
                        </div>
            </React.Fragment>
            }
            {searchTerm && results.length===0?
                <div className="ui header">No results found</div>
            :''           
            }
            {renderedResults}
            </div>
        </div>
    )
}

export default Articles
