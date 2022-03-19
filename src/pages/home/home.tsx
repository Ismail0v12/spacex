import React, {useContext} from 'react';
import LauncheList from "../../components/launche-list/launche-list";
import {ItemTypes} from "../../components/constants/constants";
import './home.css';
import StoreContext from "../../store/store";

function Home() {
  const {launchPast, launchCurrent} = useContext(StoreContext);

  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <LauncheList
            isDraggable={false}
            columnName={ItemTypes.pastLaunches}
            data={launchPast}
            title="Past Launches"/>
          <LauncheList
            data={launchCurrent}
            columnName={ItemTypes.launches}
            title="Launches"/>
          <LauncheList
            columnName={ItemTypes.myLaunches}
            isMyLaunch={true}
            title="My Launches"/>
        </div>
      </div>
    </section>
  );
}

export default Home;