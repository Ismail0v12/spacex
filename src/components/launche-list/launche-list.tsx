import React, {useContext} from 'react';
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import LauncheItem from "../launche-item/launche-item";
import Spinner from "../spinner/spinner";
import StoreContext from "../../store/store";
import './launche-list.css';

interface LauncheListProps {
  readonly columnName: string;
  readonly data?: LaunchDataInterface[] | any;
  readonly refComponent?: React.Ref<any>;
  readonly setDropped?: (isDropped: boolean) => void | any;
  readonly dropped?: boolean | any;
}

function LauncheList(
  {
    data,
    refComponent,
    columnName,
    setDropped,
    dropped
  }: LauncheListProps
) {
  const {loading} = useContext(StoreContext);

  const launchItems = data?.map((item: LaunchDataInterface) => (
    <LauncheItem
      key={item.mission_name}
      launchCardData={item}
      type={columnName}
      setDropped={setDropped}
      dropped={dropped}
    />
  ))

  return (
    <section className="launche-list" ref={refComponent}>
      <h4 className="launche-list__title">{columnName}</h4>
      <div className="launche-list__wrapper">
        {loading ? <Spinner count={3}/> : launchItems}
      </div>
    </section>
  );
}

export default LauncheList;