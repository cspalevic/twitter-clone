import {
  CSSProperties,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Placement } from "../../Popup";
import { getPosition } from "./utils";

export type Position = Maybe<Pick<CSSProperties, "top" | "left" | "maxHeight">>;
export type PositionOptions = {
  placement: Placement;
  inverse?: boolean;
  padding?: number;
};

export const usePosition = (
  anchor: RefObject<HTMLElement>,
  popup: RefObject<HTMLElement>,
  options: PositionOptions
) => {
  const [position, setPosition] = useState<Position>();

  const calculatePosition = useCallback(() => {
    if (!anchor.current || !popup.current) return undefined;
    return getPosition(anchor.current, popup.current, {
      placement: options.placement,
      inverse: options.inverse,
      padding: options.padding,
    });
  }, [anchor, popup, options.placement, options.inverse, options.padding]);

  useEffect(() => {
    setPosition(calculatePosition);
  }, [calculatePosition]);

  // useEffect(() => {
  //   window.addEventListener("resize", calculatePosition);
  //   return () => window.removeEventListener("resize", calculatePosition);
  // }, []);

  return position;
};
