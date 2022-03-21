import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './launche-item.css'
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import {useDrag} from "react-dnd";
import Modal from "../modal/modal";

interface ListItemProps {
  readonly launchCardData: LaunchDataInterface;
  readonly isDraggable?: boolean;
  readonly type?: any;
}

function LauncheItem({launchCardData, isDraggable = true, type}: ListItemProps) {
  const [dropped, setDropped] = useState(false);
  const {links: {mission_patch_small}, mission_name, id, launch_date_local} = launchCardData;
  const [{opacity}, drag] = useDrag({
    type: type,
    item: {
      id,
      mission_name,
      launch_date_local,
      links: {
        mission_patch_small
      },
    },
    end: (item, monitor) => {
      if (item && monitor.didDrop()) {
        setDropped(true);
      }
    },
    collect: (monitor) => {
      return ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      })
    }
  }, [])
  const link = `/${launchCardData.id}`;

  const humanReadableDate = new Date(launch_date_local!).toLocaleString("ru-RU", {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  })

  return (
    <>
      <Link
        to={link}
        ref={drag}
        draggable={isDraggable}
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
      {dropped && (
        <Modal setModal={setDropped}/>
      )}
    </>
  );
}

export default LauncheItem;