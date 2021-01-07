import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import BlogProvider from "./context/BlogProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";

export default function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/:postId" exact component={Post}></Route>
          </Switch>
        </Router>
      </div>
    </BlogProvider>
  );
}
