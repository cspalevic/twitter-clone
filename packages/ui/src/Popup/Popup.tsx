import cx from "classnames";
import { RefObject } from "react";
import ReactDOM from "react-dom";
import styles from "./Popup.module.css";
import { PopupBox } from "./PopupBox";

export type Placement =
  | "topLeft"
  | "top"
  | "topRight"
  | "right"
  | "bottomRight"
  | "bottom"
  | "bottomLeft"
  | "left";

export type PopupProps = {
  anchorEl: RefObject<HTMLElement>;
  onClose: () => void;
  className?: string;
  placement?: Placement;
  inverse?: boolean;
  showArrow?: boolean;
  children?: JSX.Element;
};

export const Popup = (props: PopupProps) => {
  return ReactDOM.createPortal(
    <div className={cx(styles.popupOpaqueLayer)}>
      <PopupBox {...props} />
    </div>,
    document.body
  );
};
