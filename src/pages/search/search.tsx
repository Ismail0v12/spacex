import React, {useCallback, useContext} from 'react';
import './search.css';
import LauncheList from "../../components/launche-list/launche-list";
import StoreContext from "../../store/store";
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import {useLocation} from "react-router";

function Search() {
  const {launchPast, launchCurrent} = useContext(StoreContext);
  const location = useLocation();
  const term = new URLSearchParams(location.search).get("term");

  const searchHandler = useCallback((data: LaunchDataInterface[]) => {
    if (term?.length === 0) {
      return data;
    }

    return data.filter((item) => {
      return item.mission_name.toLowerCase().indexOf(term!.toLowerCase()) > -1;
    });
  }, [term]);

  const launchPastData = searchHandler(launchPast);
  const launchCurrentData = searchHandler(launchCurrent);

  return (
    <section className="search">
      <div className="container">
        <div className="search__grid">
          <LauncheList
            columnName="Past Launch"
            data={launchPastData}
          />
          <LauncheList
            data={launchCurrentData}
            columnName="Launches"
          />
        </div>
      </div>
    </section>
  );
}

export default Search;