import Image from "next/image";
import { useRouter } from "next/router";
import { Avatar, Button, Icon, IconButton, Navbar } from "ui";
import styles from "./Header.module.css";
import { NAVBAR_ITEM_LIMIT, convertRoutesToItems } from "./navigation";

export const Header = () => {
  const { pathname, push } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerActionBarContainer}>
        <IconButton
          onClick={() => alert("logo clicked")}
          iconProps={{
            iconName: "Logo",
            className: styles.logo,
          }}
        />
        <Navbar
          items={convertRoutesToItems(pathname, push)}
          limit={NAVBAR_ITEM_LIMIT}
        />
        <Button text="Tweet" onClick={() => alert("You clicked tweet")} />
      </div>
      <button className={styles.profileContainer}>
        <Avatar>
          <Image src="/image.png" width={25} height={25} />
        </Avatar>
        <div className={styles.profileLabels}>
          <p>Charlie Spalevic</p>
          <span>@cspalevic</span>
        </div>
        <Icon className={styles.profileIcon} iconName="More" />
      </button>
    </header>
  );
};
