import React, {createContext, useEffect, useState} from "react";
import {getAllData} from "../base-api";
import {LaunchDataInterface} from "../interface/launch-data-interface";

interface StoreProps {
  readonly children: React.ReactNode;
}

const StoreContext = createContext({
  launchPast: [],
  launchCurrent: []
});

export function StoreContextProvider({children}: StoreProps) {
  const [launchPast, setLaunchPast] = useState<LaunchDataInterface[] | any>([]);
  const [launchCurrent, setLaunchCurrent] = useState<LaunchDataInterface[] | any>([]);
  useEffect(() => {
    getAllData("launches-past")
      .then(res => {
        setLaunchPast(res.data);
      })
      .catch(err => console.log(err))
    getAllData("launches-upcoming")
      .then(res => {
        setLaunchCurrent(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  const context = {
    launchPast, launchCurrent
  }
  return (
    <StoreContext.Provider value={context}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
