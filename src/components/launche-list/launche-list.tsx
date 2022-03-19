import React, {useEffect, useState} from 'react';
import './launche-list.css';
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import LauncheItem from "../launche-item/launche-item";
import Spinner from "../spinner/spinner";

interface LauncheListProps {
  readonly title: string;
  readonly columnName?: string;
  readonly isDraggable?: boolean;
  readonly data?: LaunchDataInterface[] | any;
  readonly isMyLaunch?: boolean;
}

function LauncheList({title, isDraggable = true, data, isMyLaunch = false}: LauncheListProps) {
  const [loading, setLoading] = useState(true);
  const dataLength = data?.length;

  useEffect(() => {
    if (isMyLaunch) {
      setLoading(false);
    }
    if (dataLength > 1) {
      setLoading(false);
    }
  }, [dataLength, isMyLaunch]);

  const launchItems = data?.map((item: LaunchDataInterface, index: number) => (
    <LauncheItem key={item.id + index} launchCardData={item}/>
  ))

  return (
    <section className="launche-list">
      <h4 className="launche-list__title">{title}</h4>
      <div className="launche-list__wrapper">
        {loading ? <Spinner count={3}/> : launchItems}
      </div>
    </section>
  );
}

export default LauncheList;