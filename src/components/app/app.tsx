import React from 'react';
import './app.css';
import Routing from "../routing";
import Navigation from "../navigation/navigation";
import {StoreContextProvider} from "../../store/store";

function App() {
  return (
    <StoreContextProvider>
      <main>
        <Navigation/>
        <Routing/>
      </main>
    </StoreContextProvider>
  );
}

export default App;