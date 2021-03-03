import React,{useState} from 'react'

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
                        <button className="ui button">Search</button>

                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchBar
