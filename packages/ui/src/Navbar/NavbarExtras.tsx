import { useRef, useState } from "react";
import { Popup } from "../Popup/Popup";
import { NavbarProps } from "./Navbar";
import styles from "./NavbarExtras.module.css";
import { NavbarItem } from "./NavbarItem";

export const NavbarExtras = ({ items }: Pick<NavbarProps, "items">) => {
  const moreItemRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <NavbarItem
        ref={moreItemRef}
        item={{
          iconName: "MoreOutlined",
          text: "More",
          onClick: () => setIsPopupOpen(true),
        }}
      />
      {isPopupOpen && (
        <Popup
          placement="bottomLeft"
          anchorEl={moreItemRef}
          onClose={() => setIsPopupOpen(false)}
          className={styles.navbarExtrasPopup}
          inverse
        >
          <div className={styles.navbarExtrasItemsContainer}>
            {items.map((item, index) => (
              <NavbarItem
                item={item}
                key={index}
                className={styles.navbarExtrasItem}
              />
            ))}
          </div>
        </Popup>
      )}
    </>
  );
};
