import { NavLink } from "react-router";
import styles from "./notFound.module.css";

export default function NotFound() {
  return (
    <div className="flex justify-content-center items-center flex-col text-center mt-20">
      <img
        src="public/photos/shrug.png"
        alt="404 Not Found"
        className={`w-1/4 mb-8 ${styles.shrugOnLight}`}
      />
      <img
        src="public/photos/shrug_dark.png"
        alt="404 Not Found"
        className={`w-1/4 mb-8 ${styles.shrugOnDark}`}
      />
      <h2 className="mb-4text-4xl font-bold">Whoops! It's a 404!</h2>
      <p className="mb-4">The page you are looking for doesn't exist</p>
      <NavLink to="/" className="text-sky-500 font-bold hover:underline">
        Want to return home?
      </NavLink>
    </div>
  );
}
