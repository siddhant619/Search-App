import React,{useState} from 'react'
import {Link,BrowserRouter as Router } from 'react-router-dom'

const SearchBar = ({setSearchTerm}) => {
    const [term,setTerm]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchTerm(term);
    }
    //SEE INPUT IN SEMANTIC UI
    return (
        <form className="ui inline form" onSubmit={handleSubmit}>
            <div className="inline fields">
                <div className="  field">
                    <div className="ui action input">
                        <input 
                        placeholder="Search..."
                        value={term}
                        onChange={(e)=>setTerm(e.target.value)} className="input"></input>
                        <button className="ui secondary button">Search</button>

                    </div>
                </div>
            </div>
            {/* <Router>
            <div class="ui buttons">
                        <button class="ui  button"><Link exact to="/">Images</Link></button>
                        <button class="ui  button"><Link exact to="/videos">Videos</Link></button>
                        <button class="ui  button"><Link exact to="/articles">Articles</Link></button>
            </div>
            </Router> */}
            
        </form>
    )
}

export default SearchBar
