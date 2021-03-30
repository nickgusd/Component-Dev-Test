import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom'
import Main from "./pages/Main"

export default function App() {
    return (
        <Router>
            <Switch>
              <Route path="/">
               <Main />            
              </Route>
            </Switch>
          </Router>
    )
}