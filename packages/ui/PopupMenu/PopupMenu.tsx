import cx from "classnames";
import { RefObject, useMemo } from "react";
import {
  useBoundingclientrect as useBoundingClientRect,
  useBoundingclientrectRef as useBoundingClientRectRef,
} from "rooks";
import styles from "./PopupMenu.module.css";
import { getPosition } from "./utils";

const ARROW_HEIGHT = 7;

export type Placement =
  | "topLeft"
  | "top"
  | "topRight"
  | "right"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"
  | "left";
type PlacementArrowSupport = "top" | "right" | "bottom" | "left";

const oppositePlacements: Record<PlacementArrowSupport, PlacementArrowSupport> =
  {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  };

const placementStylesMap: Record<PlacementArrowSupport, string> = {
  top: styles.arrowTop,
  right: styles.arrowRight,
  bottom: styles.arrowBottom,
  left: styles.arrowLeft,
};

export type PopupMenuProps = {
  anchorEl: RefObject<HTMLElement>;
  placement?: Placement;
  inverse?: boolean;
  showArrow?: boolean;
  children?: JSX.Element;
};

export const PopupMenu = ({
  anchorEl,
  placement = "top",
  inverse = false,
  showArrow = false,
  children,
}: PopupMenuProps) => {
  const [popupMenuRef, popupMenuRect] = useBoundingClientRectRef();
  const anchorRect = useBoundingClientRect(anchorEl);

  const position = useMemo(() => {
    return getPosition(placement, popupMenuRect, anchorRect, {
      inverse,
      padding: showArrow ? ARROW_HEIGHT : 0,
    });
  }, [placement, popupMenuRect, anchorRect, inverse, showArrow]);

  return (
    <div
      ref={popupMenuRef}
      className={styles.container}
      style={{ ...(position ?? {}) }}
    >
      {showArrow &&
        placement in oppositePlacements &&
        placement in placementStylesMap && (
          <div
            className={cx({
              [styles.arrow]: showArrow,
              [placementStylesMap[
                !inverse
                  ? oppositePlacements[placement as PlacementArrowSupport]
                  : (placement as PlacementArrowSupport)
              ]]: true,
            })}
          />
        )}
      <div
        className={cx(styles.popupMenu, {
          [styles.popupMenuVisible]: !!position,
        })}
      >
        {children}
      </div>
    </div>
  );
};
