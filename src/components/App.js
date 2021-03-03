import React, {useState} from 'react'
import SearchBar from './SearchBar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Images from './image/Images'
import Videos from './video/Videos'
import Articles from './article/Articles'
const App=()=>{
        const [searchTerm,setSearchTerm]=useState('');
        const [active,setActive]=useState(0);
        console.log(searchTerm);
        return (
            <div className="ui container">
                <SearchBar setSearchTerm={setSearchTerm}/>
                <Router>
                <div class="ui buttons">
                    <button class="ui  button"><Link exact to="/">Images</Link></button>
                    <button class="ui  button"><Link exact to="/videos">Videos</Link></button>
                    <button class="ui  button"><Link exact to="/articles">Articles</Link></button>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Images searchTerm={searchTerm} />
                    </Route>
                    <Route exact path="/videos">
                        <Videos searchTerm={searchTerm}/>
                    </Route>
                    <Route exact path="/articles">
                        <Articles searchTerm={searchTerm}/>
                    </Route>
                </Switch>
                </Router>
            </div>
      )
    
}

export default App
