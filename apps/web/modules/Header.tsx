import Image from "next/image";
import { useRouter } from "next/router";
import { Button, IconButton, Navbar, ProfileButton } from "ui";
import styles from "./Header.module.css";
import { NAVBAR_ITEM_LIMIT, getNavbarItems } from "./navigation";

export const Header = () => {
  const { pathname, push } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.headerAlignment}>
        <div className={styles.headerItems}>
          <div>
            <IconButton
              onClick={() => alert("logo clicked")}
              iconProps={{
                iconName: "Logo",
                className: styles.logo,
              }}
            />
            <Navbar
              items={getNavbarItems(pathname, push)}
              limit={NAVBAR_ITEM_LIMIT}
            />
            <Button text="Tweet" onClick={() => alert("You clicked tweet")} />
          </div>
          <ProfileButton
            avatarImage={
              <Image
                alt="Person Avatar"
                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
                width={50}
                height={50}
              />
            }
            name="Charllie Spalevic"
            handle="@cspalevic"
          />
        </div>
      </div>
    </header>
  );
};
