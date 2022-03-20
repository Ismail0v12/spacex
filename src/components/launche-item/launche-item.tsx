import React from 'react';
import {Link} from "react-router-dom";
import './launche-item.css'
import {LaunchDataInterface} from "../../interface/launch-data-interface";
import {useDrag} from "react-dnd";

interface ListItemProps {
  readonly launchCardData: LaunchDataInterface;
  readonly isDraggable?: boolean;
  readonly type?: any;
}

function LauncheItem({launchCardData, isDraggable = true, type}: ListItemProps) {
  const {links: {mission_patch_small}, mission_name, id} = launchCardData;

  const [{opacity}, drag] = useDrag({
    type: type,
    item: {
      mission_name,
      links: {
        mission_patch_small
      },
      id
    },
    collect: (monitor) => {
      return ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      })
    }
  }, [type])
  const link = `/${launchCardData.id}`;
  return (
    <Link
      to={link}
      ref={drag}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="launche-item"
      draggable={isDraggable}
      style={{opacity}}
    >
      <div className="launche-item__img">
        <img
          src={mission_patch_small ? mission_patch_small : "https://images2.imgbox.com/9a/96/nLppz9HW_o.png"}
          alt={mission_name}/>
      </div>
      <div className="launche-item__body">
        <div className="launche-item__title">{mission_name}</div>
        <div className="launche-item__date">12.08.2002</div>
      </div>
    </Link>
  );
}

export default LauncheItem;