import React from 'react';
import Skeleton from "react-loading-skeleton";

interface SpinnerProps {
  readonly count: number;
}

function Spinner({count}: SpinnerProps) {
  const template = Array(count).fill(
    <div className="spinner">
      <Skeleton width="100%" height={200}/>
      <Skeleton height={50}/>
    </div>);

  return (
    <React.Fragment>
      {template.map((item, index) => (
        <React.Fragment key={index}>
          {item}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default Spinner;