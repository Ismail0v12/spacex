import React, {useContext} from 'react';
import './launche-list.css';
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import LauncheItem from "../launche-item/launche-item";
import Spinner from "../spinner/spinner";
import StoreContext from "../../store/store";

interface LauncheListProps {
  readonly columnName: string;
  readonly isDraggable?: boolean;
  readonly data?: LaunchDataInterface[] | any;
  readonly refComponent?: React.Ref<any>;
}

function LauncheList(
  {
    isDraggable = true,
    data,
    refComponent,
    columnName,
  }: LauncheListProps
) {
  const {loading} = useContext(StoreContext);


  const launchItems = data?.map((item: LaunchDataInterface, index: number) => (
    <LauncheItem
      key={item.id + index}
      isDraggable={isDraggable}
      launchCardData={item}
      type={columnName}
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