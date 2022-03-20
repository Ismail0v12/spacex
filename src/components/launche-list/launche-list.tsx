import React, {useContext} from 'react';
import './launche-list.css';
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import LauncheItem from "../launche-item/launche-item";
import Spinner from "../spinner/spinner";
import StoreContext from "../../store/store";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../constants/constants";

interface LauncheListProps {
  readonly columnName: string;
  readonly isDraggable?: boolean;
  readonly data?: LaunchDataInterface[] | any;
  readonly setStateFrom?: (data: (data: any[]) => any) => void;
  readonly setStateTo?: (data: (data: any[]) => any) => void;
}

function LauncheList(
  {
    isDraggable = true,
    data,
    columnName,
    setStateTo,
    setStateFrom
  }: LauncheListProps
) {
  const {loading} = useContext(StoreContext);

  const [{isOver, didDrop}, drop] = useDrop({
    accept: ItemTypes.launches || ItemTypes.myLaunches,
    drop: (item: LaunchDataInterface, monitor) => {
      const itemType = monitor.getItemType();
      switch (itemType) {
        case "Launches":
          setStateTo && setStateTo((state: any) => {
            return [
              ...state,
              item
            ]
          });
          setStateFrom && setStateFrom((state) => {
            const index = state.findIndex((launch: { id: string; }) => launch.id === item?.id);
            return [...state.slice(0, index), ...state.slice(index + 1)]
          });
          break;
        case "My Launches":
          setStateTo && setStateTo((state) => {
            const index = data.findIndex((launch: { id: string; }) => launch.id === item?.id);
            return [...data.slice(0, index), ...data.slice(index + 1)]

          });
          setStateFrom && setStateFrom((state) => {
            return [
              ...state,
              item
            ]
          });
          break;
        default:
          break;
      }
    },
    collect: (monitor) => {
      return ({
        isOver: monitor.isOver(),
        didDrop: monitor.didDrop(),
      })
    }
  }, []);
  const launchItems = data?.map((item: LaunchDataInterface, index: number) => (
    <LauncheItem
      key={item.id + index}
      isDraggable={isDraggable}
      launchCardData={item}
      type={columnName}
    />
  ))

  return (
    <section className="launche-list" ref={drop}>
      <h4 className="launche-list__title">{columnName}</h4>
      <div className="launche-list__wrapper">
        {loading ? <Spinner count={3}/> : launchItems}
      </div>
    </section>
  );
}

export default LauncheList;