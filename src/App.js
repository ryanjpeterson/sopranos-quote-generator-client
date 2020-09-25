import React from "react";
import "./App.css";
import axios from "axios";

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/home/home.component.jsx";
import PostPage from "./pages/post/post.component.jsx";
import EditPage from "./pages/edit/edit.component";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post" component={PostPage} />
        <Route
          exact
          path="/edit/:postId"
          component={({ match }) => <EditPage postId={match.params.postId} />}
        />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
