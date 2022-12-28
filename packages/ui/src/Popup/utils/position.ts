import { CSSProperties } from "react";
import { Maybe } from "types-custom";
import { Position, PositionOptions } from "../hooks/usePosition";

type Coordinate = Maybe<Pick<CSSProperties, "top" | "left">>;
type CoordinateOptions = Omit<PositionOptions, "inverse">;

const BORDER_RADIUS = 5;

const getInverseCoordinate = (
  anchorRect: DOMRect,
  popupRect: DOMRect,
  { placement, padding = 0 }: CoordinateOptions
) => {
  let coordinate: Coordinate = null;
  switch (placement) {
    case "topLeft":
      coordinate = {
        top: anchorRect.top,
        left: anchorRect.left,
      };
      break;
    case "top":
      coordinate = {
        top: anchorRect.top + padding,
        left: anchorRect.left + anchorRect.width / 2 - popupRect.width / 2,
      };
      break;
    case "topRight":
      coordinate = {
        top: anchorRect.top,
        left: anchorRect.right - popupRect.width,
      };
      break;
    case "right":
      coordinate = {
        top: anchorRect.top + anchorRect.height / 2 - popupRect.height / 2,
        left: anchorRect.right - popupRect.width - padding,
      };
      break;
    case "bottomRight":
      coordinate = {
        top: anchorRect.bottom - popupRect.height,
        left: anchorRect.right - popupRect.width,
      };
      break;
    case "bottom":
      coordinate = {
        top: anchorRect.bottom - popupRect.height - padding,
        left: anchorRect.left + anchorRect.width / 2 - popupRect.width / 2,
      };
      break;
    case "bottomLeft":
      coordinate = {
        top: anchorRect.bottom - popupRect.height,
        left: anchorRect.left,
      };
      break;
    case "left":
      coordinate = {
        top: anchorRect.top + anchorRect.height / 2 - popupRect.height / 2,
        left: anchorRect.left + padding,
      };
      break;
  }
  return coordinate;
};

const getRegularCoordinate = (
  anchorRect: DOMRect,
  popupRect: DOMRect,
  { placement, padding = 0 }: CoordinateOptions
) => {
  let coordinate: Coordinate = null;
  switch (placement) {
    case "topLeft":
      coordinate = {
        top: anchorRect.top - popupRect.height + BORDER_RADIUS,
        left: anchorRect.left - popupRect.width + BORDER_RADIUS,
      };
      break;
    case "top":
      coordinate = {
        top: anchorRect.top - popupRect.height - padding,
        left: anchorRect.left + anchorRect.width / 2 - popupRect.width / 2,
      };
      break;
    case "topRight":
      coordinate = {
        top: anchorRect.top - popupRect.height + BORDER_RADIUS,
        left: anchorRect.right - BORDER_RADIUS,
      };
      break;
    case "right":
      coordinate = {
        top: anchorRect.top + anchorRect.height / 2 - popupRect.height / 2,
        left: anchorRect.right + padding,
      };
      break;
    case "bottomRight":
      coordinate = {
        top: anchorRect.bottom - BORDER_RADIUS,
        left: anchorRect.right - BORDER_RADIUS,
      };
      break;
    case "bottom":
      coordinate = {
        top: anchorRect.bottom + padding,
        left: anchorRect.left + anchorRect.width / 2 - popupRect.width / 2,
      };
      break;
    case "bottomLeft":
      coordinate = {
        top: anchorRect.bottom - BORDER_RADIUS,
        left: anchorRect.left - popupRect.width + BORDER_RADIUS,
      };
      break;
    case "left":
      coordinate = {
        top: anchorRect.top + anchorRect.height / 2 - popupRect.height / 2,
        left: anchorRect.left - popupRect.width - padding,
      };
      break;
  }
  return coordinate;
};

export const getPosition = (
  anchor: HTMLElement,
  popup: HTMLElement,
  { inverse, ...coordinateOptions }: PositionOptions
): Position => {
  const anchorRect = anchor.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();

  const coordinate: Coordinate = inverse
    ? getInverseCoordinate(anchorRect, popupRect, coordinateOptions)
    : getRegularCoordinate(anchorRect, popupRect, coordinateOptions);
  return {
    ...coordinate,
    maxHeight: `calc(100vh - ${coordinate.top}px)`,
  };
};
