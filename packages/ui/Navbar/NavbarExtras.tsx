import { useRef, useState } from "react";
import { Popup } from "../Popup/Popup";
import { NavbarProps } from "./Navbar";
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
          inverse={true}
        >
          <div>
            {items.map((item, index) => (
              <NavbarItem item={item} key={index} />
            ))}
          </div>
        </Popup>
      )}
    </>
  );
};
