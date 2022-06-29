import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
function App() {
  return (
    <div>
      <Navs />

      <Switch>
        <Route exact path="/">
          this is home page
        </Route>

        <Route exact path="/starred">
          this is starred
        </Route>
        <Route>This is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
