import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import "react-loading-skeleton/dist/skeleton.css";

import App from "./components/app/app";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DndProvider backend={HTML5Backend}>
        <App/>
      </DndProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);

