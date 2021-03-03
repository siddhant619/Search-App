import React, { useEffect, useState } from 'react';
import axios from 'axios'
import wiki from '../../apis/wiki'


const Articles = ({searchTerm}) => {
    const [results,setResults]=useState([]);
    const [page, setPage] = useState(0)

    //console.log('I RUN WITH EVERY RENDER');
    //console.log(results);//this runs twice for each letter entered- once coz term state changes, 2nd when api is called and results state changes(after delay completed)
    const search= async()=>{
        try{
            console.log('request made');
            const {data}=await wiki.get('',{
                params:{
                    
                    srsearch:searchTerm,
                    sroffset:page
                }
            })
            console.log('from wiki',data);
            setResults(data.query.search);
        }
        catch(e){
            console.log('oh no');
        }

    }

    useEffect(()=>{ 
        console.log('Initial render or term update');
        if(searchTerm){ //this occurs for 1st render- where term= programming but result array is empty, so make a request without a delay
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
        if(searchTerm)
            search();
    
    }, [page]);
    const handlePrev=()=>{
        if(page>0)
            setPage(prevPage=>prevPage-1);
    }
    const handleNext=()=>{
        setPage(prevPage=>prevPage+1);
    }
    return (
        <div>
            Articles
            <div className="ui celled list">
            <React.Fragment> 
                        <i class="big arrow alternate circle left icon " onClick={handlePrev}></i>
                        <i class="big arrow alternate circle right icon" onClick={handleNext}></i>
                    </React.Fragment>
                {renderedResults}
            </div>
        </div>
    )
}

export default Articles
