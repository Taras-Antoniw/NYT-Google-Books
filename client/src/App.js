import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./views/Search";
import Saved from "./views/Saved";
import Single from "./views/Single";


const App  = () => {

  return (
    <Router>
    <div>
      <Navbar/>
      <Switch> 
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/saved/:bookId" component={Single} />
        
        <Route render={() => <h1 className="text-center m-5">404, Page Not Found!</h1>} />
        </Switch>
    </div>
    </Router>
  )
}

export default App;



