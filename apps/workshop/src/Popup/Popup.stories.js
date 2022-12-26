import { useRef, useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Popup } from "ui";
import styles from "./Popup.module.css";

export const SamplePopup = ({
  placement = "left",
  inverse = false,
  showArrow = false,
}) => {
  const container = useRef(null);
  const anchorEl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return _jsxs(
    "div",
    Object.assign(
      { ref: container, className: styles.container },
      {
        children: [
          isOpen &&
            _jsx(
              Popup,
              Object.assign(
                {
                  onClose: () => setIsOpen(false),
                  showArrow: showArrow,
                  inverse: inverse,
                  placement: placement,
                  anchorEl: anchorEl,
                },
                { children: _jsx("h1", { children: "Hi!" }) }
              )
            ),
          _jsx(Button, {
            disabled: isOpen,
            ref: anchorEl,
            text: "Click me",
            onClick: () => setIsOpen(!isOpen),
          }),
        ],
      }
    )
  );
};
export default {
  title: "Popup",
  component: Popup,
  argTypes: {
    placement: {
      control: "select",
      options: [
        "topLeft",
        "top",
        "topRight",
        "right",
        "bottomRight",
        "bottom",
        "bottomLeft",
        "left",
      ],
    },
    inverse: {
      control: "boolean",
    },
    showArrow: {
      control: "boolean",
    },
  },
};
