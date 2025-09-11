import { WifiIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import styles from './header.module.css';

export default function Header() {
  return (
    <header className="flex justify-between item-center px-10 pb-5 pt-4">
      <div className="flex">
        <h1 className="mr-8">
          <a href="/" className={`flex text-lg/1.3 font-extrabold ${styles.navlink}`}>
            <WifiIcon className="size-6 mr-3" /> Contact
          </a>
        </h1>
        <nav>
          <ul className="flex gap-10">
            <li><a className={`text-sm ${styles.navlink}`} href="/members">Members</a></li>
            <li><a className={`text-sm ${styles.navlink}`} href="/notifications">Notifications</a></li>
            <li><a className={`text-sm ${styles.navlink}`} href="/messages">Messages</a></li>
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
