import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Layout from "./components/Layout";

const Compose = React.lazy(() => {
  return import("./components/Compose/Compose");
});

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="">
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/compose" render={() => <Compose />} />
      </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;