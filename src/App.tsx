import React, { Fragment } from 'react';
import StoreInfo from "./components/Store";
import Index from "./components/Store/UpdateStore/Index";
import 'bootstrap/dist/css/bootstrap.css';
import "./accest/index.css"
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        {/* <StoreInfo/> */}
      </Fragment>
      <Switch>
        <Route exact path="/"><StoreInfo /></Route>
        <Route path="/:id" exact children={<Index />}/>
      </Switch>
    </Router>
  );
}

export default App;
