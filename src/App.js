import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  const pageSize = 10;
  const [ progress, setProgress] = useState(0)
  return (
    <div>
        <Router>
          <Navbar/>
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <Switch>
          <Route exact path="/"><News pageSize={pageSize}  setProgress={setProgress}  key="general"  country="in" category="general"/></Route>
          <Route exact path="/business"><News pageSize={pageSize}  setProgress={setProgress}  key="business"  country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News pageSize={pageSize}  setProgress={setProgress}  key="entertainment"  country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News pageSize={pageSize}  setProgress={setProgress}  key="general"  country="in" category="general"/></Route>
          <Route exact path="/health"><News pageSize={pageSize}  setProgress={setProgress}  key="health"  country="in" category="health"/></Route>
          <Route exact path="/science"><News pageSize={pageSize}  setProgress={setProgress}  key="science"  country="in" category="science"/></Route>
          <Route exact path="/sports"><News pageSize={pageSize}  setProgress={setProgress}  key="sports"  country="in" category="sports"/></Route>
          <Route exact path="/technology"><News pageSize={pageSize}  setProgress={setProgress}  key="technology"  country="in" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
  )
}



