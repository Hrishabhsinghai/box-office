import React from 'react';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is home page
      </Route>

      <Route path="/starred">this is starred</Route>
    </Switch>
  );
}

export default App;
