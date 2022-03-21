import React, {useContext} from 'react';
import LauncheList from "../../components/launche-list/launche-list";
import './home.css';
import StoreContext from "../../store/store";
import useCustomDrop from "../../hooks/useCustomDrop";

function Home() {
  const {
    launchPast,
    launchCurrent,
    setLaunchCurrent,
    myLaunches,
    setMyLaunches
  } = useContext(StoreContext);

  const {drop: launchesRef} = useCustomDrop({
    accept: "Launches",
    setStateFrom: setLaunchCurrent,
    setStateTo: setMyLaunches
  });
  const {drop: myLaunchesRef} = useCustomDrop({
    accept: "My Launches",
    setStateFrom: setMyLaunches,
    setStateTo: setLaunchCurrent
  });

  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <LauncheList
            isDraggable={false}
            columnName={"Past Launches"}
            data={launchPast}
          />
          <LauncheList
            refComponent={myLaunchesRef}
            data={launchCurrent}
            columnName={"Launches"}
          />
          <LauncheList
            refComponent={launchesRef}
            data={myLaunches}
            columnName={"My Launches"}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;