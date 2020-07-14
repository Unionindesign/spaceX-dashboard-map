import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

//pages
import Dashboard from "./pages/dashboard";
import Landing from "./pages/landing";
function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
