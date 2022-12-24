import { CSSProperties } from "react";
import { Placement } from "./PopupMenu";

type Position = Pick<CSSProperties, "top" | "left">;

const BORDER_RADIUS = 5;

const getInversePosition = (
  placement: Placement,
  sourceRect: DOMRect,
  anchorRect: DOMRect,
  padding: number
) => {
  let position: Position | undefined = undefined;
  switch (placement) {
    case "topLeft":
      position = {
        top: anchorRect.top,
        left: anchorRect.left,
      };
      break;
    case "top":
      position = {
        top: anchorRect.top + padding,
      };
      break;
    case "topRight":
      position = {
        top: anchorRect.top,
        left: anchorRect.right - sourceRect.width,
      };
      break;
    case "right":
      position = {
        left: anchorRect.right - sourceRect.width - padding,
      };
      break;
    case "bottomRight":
      position = {
        top: anchorRect.bottom - sourceRect.height,
        left: anchorRect.right - sourceRect.width,
      };
      break;
    case "bottom":
      position = {
        top: anchorRect.bottom - sourceRect.height - padding,
      };
      break;
    case "bottomLeft":
      position = {
        top: anchorRect.bottom - sourceRect.height,
        left: anchorRect.left,
      };
      break;
    case "left":
      position = {
        left: anchorRect.left + padding,
      };
      break;
  }
  return position;
};

const getRegularPosition = (
  placement: Placement,
  sourceRect: DOMRect,
  anchorRect: DOMRect,
  padding: number
) => {
  let position: Position | undefined = undefined;
  switch (placement) {
    case "topLeft":
      position = {
        top: anchorRect.top - sourceRect.height + BORDER_RADIUS,
        left: anchorRect.left - sourceRect.width + BORDER_RADIUS,
      };
      break;
    case "top":
      position = {
        top: anchorRect.top - sourceRect.height - padding,
      };
      break;
    case "topRight":
      position = {
        top: anchorRect.top - sourceRect.height + BORDER_RADIUS,
        left: anchorRect.right - BORDER_RADIUS,
      };
      break;
    case "right":
      position = {
        left: anchorRect.right + padding,
      };
      break;
    case "bottomRight":
      position = {
        top: anchorRect.bottom - BORDER_RADIUS,
        left: anchorRect.right - BORDER_RADIUS,
      };
      break;
    case "bottom":
      position = {
        top: anchorRect.bottom + padding,
      };
      break;
    case "bottomLeft":
      position = {
        top: anchorRect.bottom - BORDER_RADIUS,
        left: anchorRect.left - sourceRect.width + BORDER_RADIUS,
      };
      break;
    case "left":
      position = {
        left: anchorRect.left - sourceRect.width - padding,
      };
      break;
  }
  return position;
};

export const getPosition = (
  placement: Placement,
  sourceRect: DOMRect | null,
  anchorRect: DOMRect | null,
  options: { inverse: boolean; padding: number }
) => {
  if (!sourceRect || !anchorRect) return undefined;

  let position: Position | undefined = options.inverse
    ? getInversePosition(placement, sourceRect, anchorRect, options.padding)
    : getRegularPosition(placement, sourceRect, anchorRect, options.padding);
  return position;
};
