import React, {memo, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDrag} from "react-dnd";
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import './launche-item.css';

interface ListItemProps {
  readonly launchCardData: LaunchDataInterface;
  readonly type?: any;
  readonly setDropped?: (isDropped: boolean) => void | any;
  readonly dropped?: boolean | any;
}

const LauncheItem = memo(function ({launchCardData, type, setDropped, dropped}: ListItemProps) {
  const {links: {mission_patch_small}, mission_name, id, launch_date_local} = launchCardData;

  const [{opacity, didDrop}, drag] = useDrag({
    type: type,
    item: {
      id,
      mission_name,
      launch_date_local,
      links: {
        mission_patch_small
      },
    },
    collect: (monitor) => {
      return ({
        opacity: monitor.isDragging() ? 0.5 : 1,
        didDrop: monitor.didDrop()
      });
    }
  }, []);

  useEffect(() => {
    if (didDrop) {
      setDropped && setDropped(true);
    }
  }, [didDrop]);

  const humanReadableDate = new Date(launch_date_local).toLocaleString("ru-RU", {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  });
  const link = `/${launchCardData.id}`;

  return (
    <>
      <Link
        to={link}
        ref={drag}
        style={{opacity}}
        className="launche-item"
      >
        <div className="launche-item__img">
          <img
            loading={"lazy"}
            src={!mission_patch_small ? "https://images2.imgbox.com/9a/96/nLppz9HW_o.png" : mission_patch_small}
            alt={mission_name}/>
        </div>
        <div className="launche-item__body">
          <div className="launche-item__title">{mission_name}</div>
          <div className="launche-item__date">{humanReadableDate}</div>
        </div>
      </Link>
    </>
  );
});

export default LauncheItem;