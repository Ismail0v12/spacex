import React, {createContext, useEffect, useState} from "react";
import {getAllData} from "../base-api";
import {LaunchDataInterface} from "../interface/launch-data-interface";

interface StoreProps {
  readonly children: React.ReactNode;
}


const StoreContext = createContext({
  launchPast: [],
  launchCurrent: [],
  myLaunches: [],
  loading: true,
  setLaunchCurrent: (data: (data: any) => any[]) => {
    return;
  },
  setMyLaunches: (data: (data: any) => any[]) => {
    return;
  }
});

export function StoreContextProvider({children}: StoreProps) {
  const [launchPast, setLaunchPast] = useState<LaunchDataInterface[] | any>([]);
  const [launchCurrent, setLaunchCurrent] = useState<LaunchDataInterface[] | any>([]);
  const [myLaunches, setMyLaunches] = useState<LaunchDataInterface[] | any>([]);

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getAllData("launches-past")
      .then(res => {
        setLaunchPast(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
    getAllData("launches-upcoming")
      .then(res => {
        setLaunchCurrent(res.data);
        setLoading(false);

      })
      .catch(err => console.log(err));
  }, []);
  const context = {
    launchPast,
    launchCurrent,
    loading,
    myLaunches,
    setLaunchCurrent,
    setMyLaunches
  };
  return (
    <StoreContext.Provider value={context}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
