import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import styles from "./header.module.css";
import { NavLink } from "react-router";
import HamburgerMenu from "@/components/header/HamburgerMenu";
import { type ClassnameProps } from "@/lib/types/post";

export default function Header() {
  return (
    <header className={styles.header}>
      <HamburgerMenu />
      <div className="md:flex hidden">
        <h1 className="mr-8">
          <NavLink
            to="/"
            className={`flex text-lg/1.3 font-extrabold ${styles.navlink}`}
          >
            <MegaphoneIcon className="size-6 mr-3" /> Contact
          </NavLink>
        </h1>
        <nav>
          <ul className="flex gap-10">
            <li>
              <NavLink
                className={({ isActive }: ClassnameProps) =>
                  isActive ? styles.navlinkActive : styles.navlink
                }
                to="/members"
              >
                Members
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }: ClassnameProps) =>
                  isActive ? styles.navlinkActive : styles.navlink
                }
                to="/notifications"
              >
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }): ClassnameProps =>
                  isActive ? styles.navlinkActive : styles.navlink
                }
                to="/messages"
              >
                Messages
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Avatar className="size-10">
        <AvatarImage src="avatars/7.png" />
        <AvatarFallback>LKY</AvatarFallback>
      </Avatar>
    </header>
  );
}
