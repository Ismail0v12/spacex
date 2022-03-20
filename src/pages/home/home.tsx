import React, {useContext} from 'react';
import LauncheList from "../../components/launche-list/launche-list";
import {ItemTypes} from "../../components/constants/constants";
import './home.css';
import StoreContext from "../../store/store";

function Home() {
  const {
    launchPast,
    launchCurrent,
    setLaunchCurrent,
    myLaunches,
    setMyLaunches
  } = useContext(StoreContext);
  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <LauncheList
            isDraggable={false}
            columnName={ItemTypes.pastLaunches}
            data={launchPast}
          />
          <LauncheList
            data={launchCurrent}
            setStateFrom={setLaunchCurrent}
            setStateTo={setMyLaunches}
            columnName={ItemTypes.launches}
          />
          <LauncheList
            data={myLaunches}
            columnName={ItemTypes.myLaunches}
            setStateFrom={setLaunchCurrent}
            setStateTo={setMyLaunches}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;