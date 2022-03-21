import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {DndProvider} from 'react-dnd';
import {TouchBackend} from "react-dnd-touch-backend";
import {HTML5Backend} from "react-dnd-html5-backend";
import "react-loading-skeleton/dist/skeleton.css";

import App from "./components/app/app";

const options = {
  enableMouseEvents: true
}

const {innerWidth: width} = window;

const renderBackend = width > 992 ? HTML5Backend : TouchBackend;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DndProvider backend={renderBackend} options={options}>
        <App/>
      </DndProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);

