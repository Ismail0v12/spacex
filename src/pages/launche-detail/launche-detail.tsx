import React, {useEffect, useState} from 'react';
import './launche-detail.css';
import {getDataById} from "../../base-api";
import {useParams} from "react-router";
import {LaunchDataInterface, ShipsInterface} from "../../interface/launch-data-interface";
import Skeleton from "react-loading-skeleton";
import CheckIcon from "../../assets/icons/check-icon";
import CancelIcon from "../../assets/icons/cancel-icon";

function LauncheDetail() {
  const {id} = useParams();
  const [data, setData] = useState<LaunchDataInterface | any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getDataById(id)
      .then(res => {
        setData(res.data);
        setLoading(false)
      })
      .catch(err => console.log(err));
  }, [id]);

  if (loading) {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          paddingTop: "50px"
        }}>
        <Skeleton width={500} height={400}/>
        <Skeleton width={700} height={400}/>
      </div>
    )
  }

  return (
    <section className="launche-detail">
      <div className="container">
        <div className="launche-detail__wrapper">
          <div className="launche-detail__img">
            <img
              src={data?.links.mission_patch_small ? data?.links.mission_patch_small : "https://images2.imgbox.com/9a/96/nLppz9HW_o.png"}
              alt={data?.mission_name}/>
          </div>
          <div className="launche-detail__description">
            <div className="launche-detail__title">
              {data?.mission_name}
            </div>
            <article>{data?.details}</article>
            <table>
              <thead>
              <tr>
                <td>Ships</td>
                <td>Launch Year</td>
                <td>Launched Successfully</td>
                <td>Upcoming</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  {
                    data?.ships.length === 0 ? "No information found" :
                      data?.ships.map((item: ShipsInterface) => {
                        if (item === null) {
                          return ""
                        }
                        return <span key={item.id}>{item.id}, </span>
                      })
                  }
                </td>
                <td>{data?.launch_date_local}</td>
                <td>
                  {
                    data?.launch_success ? <span className="check-icon"><CheckIcon/></span> :
                      <span className="cancel-icon"><CancelIcon/></span>
                  }
                </td>
                <td>
                  {
                    data?.upcoming ? <span className="check-icon"><CheckIcon/></span> :
                      <span className="cancel-icon"><CancelIcon/></span>
                  }
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LauncheDetail;