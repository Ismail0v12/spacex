import React from 'react';
import {Link} from "react-router-dom";
import './launche-item.css'
import {LaunchDataInterface} from "../../interface/launch-data-interface";

interface ListItemProps {
  readonly launchCardData: LaunchDataInterface;
  readonly isDraggable?: boolean;
}

function LauncheItem({launchCardData, isDraggable}: ListItemProps) {
  const link = `/${launchCardData.id}`;
  return (
    <Link
      to={link}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="launche-item"
      draggable={isDraggable}>
      <div className="launche-item__img">
        <img
          src={launchCardData.links.mission_patch_small ? launchCardData.links.mission_patch_small : "https://images2.imgbox.com/9a/96/nLppz9HW_o.png"}
          alt={launchCardData.mission_name}/>
      </div>
      <div className="launche-item__body">
        <div className="launche-item__title">{launchCardData.mission_name}</div>
        <div className="launche-item__date">12.08.2002</div>
      </div>
    </Link>
  );
}

export default LauncheItem;