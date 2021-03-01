import React from 'react'
import LayoutComic from "./components/LayoutComic";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <LayoutComic></LayoutComic>
    </Router>
  </div>
)

export default App;
