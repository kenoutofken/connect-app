import { useState } from "react";
import { NavLink } from "react-router";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { type ClassnameProps } from "@/lib/types/post";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "./header.module.css";

interface MenuItem {
  title: string;
  href: string;
}

interface MenuItemProps {
  item: MenuItem;
}

const menuItems: MenuItem[] = [
  { title: "Connect", href: "/" },
  { title: "Members", href: "/members" },
  { title: "Notifications", href: "/notifications" },
  { title: "Messages", href: "/messages" },
];

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="flex items-center">
      {item.href === "/" && <MegaphoneIcon className="size-6 mr-3" />}
      <NavLink
        to={item.href}
        className={({ isActive }: ClassnameProps) =>
          isActive
            ? cn(
                `block py-2 pl-9 ${styles.navlinkActive}`,
                item.href === "/" && "pl-0"
              )
            : cn(
                `block py-2 pl-9 ${styles.navlink}`,
                item.href === "/" && "pl-0"
              )
        }
      >
        {item.title}
      </NavLink>
    </div>
  );
};

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className={styles.sheetButton}
          aria-label="Toggle menu"
        >
          <Bars3Icon className="h-5 w-5" />
          <span className="sr-only">Toggle</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={styles.sheet}>
        <SheetTitle className="sr-only">Primary NNavigation</SheetTitle>
        <SheetDescription className="sr-only">
          Primary Navigation
        </SheetDescription>
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <MenuItem key={item.href} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
