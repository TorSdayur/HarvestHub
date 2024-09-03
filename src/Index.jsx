/* Author: Tor Sdayur */

// App entrypoint

import "./App.css";
import App from './App.jsx'

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AboutUs } from "./pages/aboutus.jsx";
import { ProjectInfo } from "./pages/projectinfo.jsx"

import { Layout } from "./Layout.jsx";


function Index() {

  return (
      <div>
        <Router>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={ <App /> }/>
              <Route path="/aboutus" element={ <AboutUs /> }/>
              <Route path="/projectinfo" element={ <ProjectInfo />}/>
              <Route path="/useharvesthub" element={ <App />}/>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default Index;
