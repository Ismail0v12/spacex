import React, {useEffect} from 'react';
import './app.css';
import Routing from "../routing";
import Navigation from "../navigation/navigation";
import {StoreContextProvider} from "../../store/store";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
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