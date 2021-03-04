import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter as Router,Switch,Route,Link,useLocation} from "react-router-dom";

const Index=()=>{
    return(
    <Router>
        <App />
    </Router>
    )
}

ReactDOM.render(<Index />,document.getElementById('root'))