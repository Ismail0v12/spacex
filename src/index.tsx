import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {BrowserRouter as Router} from "react-router-dom";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import "react-loading-skeleton/dist/skeleton.css";

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

