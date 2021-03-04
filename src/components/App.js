import React, {useState} from 'react'
import SearchBar from './SearchBar'
import {BrowserRouter as Router,Switch,Route,Link,useLocation} from "react-router-dom";
import Images from './image/Images'
import Videos from './video/Videos'
import Articles from './article/Articles'
const App=()=>{
        const [searchTerm,setSearchTerm]=useState('');
        const [active,setActive]=useState(0);
        let loc=useLocation();
        //console.log(loc.pathname);

        return (
            <div className="ui container">
                <SearchBar setSearchTerm={setSearchTerm}/>
                <>
                    {/* <div class="ui buttons">
                        <button class="ui  button"><Link exact to="/">Images</Link></button>
                        <button class="ui  button"><Link exact to="/videos">Videos</Link></button>
                        <button class="ui  button"><Link exact to="/articles">Articles</Link></button>
                    </div> */}
                    <div className="ui large  horizontal link list divided">
                        <div className={`${loc.pathname==="/"?'active':''}  item`}>
                            <div className="content">
                            <Link exact to="/"><div className="">Images</div></Link>
                            </div>
                        </div>
                        <div className={`${loc.pathname==="/videos"?'active':''}  item`}>
                            <div className="content">
                            <Link exact to="/videos"><div className="">Videos</div></Link>
                            </div>
                        </div>
                        <div className={`${loc.pathname==="/articles"?'active':''}  item`}>
                            <div className="content">
                                <Link exact to="/articles"><div className="">Articles</div></Link>
                            </div>
                        </div>
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
                </>
            </div>
      )
    
}

export default App
