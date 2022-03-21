import React from 'react';
import {useDrop} from "react-dnd";
import {LaunchDataInterface} from "../interface/launch-data-interface";

interface useCustomDrop {
  accept: string,
  setStateFrom: (data: (data: any[]) => any) => void;
  setStateTo: (data: (data: any[]) => any) => void;
}

function useCustomDrop({accept, setStateTo, setStateFrom}: useCustomDrop) {
  const [{isOver}, drop] = useDrop({
    accept,
    drop: (item: LaunchDataInterface) => {
      setStateTo((state: any) => [...state, item]);

      setStateFrom((state) => {
        const index = state.findIndex((launch: { mission_name: string; }) => launch.mission_name === item.mission_name);
        return [...state.slice(0, index), ...state.slice(index + 1)];
      });
    },
    collect: (monitor) => {
      return ({
        isOver: monitor.isOver(),
      })
    }
  }, []);

  return {drop, isOver};
}

export default useCustomDrop;