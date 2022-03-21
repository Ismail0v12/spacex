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
      setStateTo((state: any) => [item, ...state]);
      setStateFrom((state) => {
        const index = state.findIndex((launch: { mission_name: string; }) => launch.mission_name === item.mission_name);
        return state.splice(index, 1);
      });
    },
    collect: (monitor) => {
      return ({
        isOver: monitor.isOver(),
      });
    }
  }, [accept]);

  return {drop, isOver};
}

export default useCustomDrop;