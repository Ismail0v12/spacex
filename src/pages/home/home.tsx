import React, {useContext, useState} from 'react';
import ReactDOM from "react-dom";
import LauncheList from "../../components/launche-list/launche-list";
import StoreContext from "../../store/store";
import useCustomDrop from "../../hooks/useCustomDrop";
import Modal from "../../components/modal/modal";
import './home.css';

function Home() {
  const {
    launchPast,
    launchCurrent,
    setLaunchCurrent,
    myLaunches,
    setMyLaunches
  } = useContext(StoreContext);
  const [dropped, setDropped] = useState(false);

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
            columnName={"Past Launches"}
            data={launchPast}
          />
          <LauncheList
            refComponent={myLaunchesRef}
            data={launchCurrent}
            columnName={"Launches"}
            dropped={dropped}
            setDropped={setDropped}
          />
          <LauncheList
            refComponent={launchesRef}
            data={myLaunches}
            columnName={"My Launches"}
            dropped={dropped}
            setDropped={setDropped}
          />
        </div>
        {dropped &&
          ReactDOM.createPortal(
            <Modal setModal={setDropped}/>,
            document.getElementById("portal") as HTMLElement
          )
        }
      </div>
    </section>
  );
}

export default Home;