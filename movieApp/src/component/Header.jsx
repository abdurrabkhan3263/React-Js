import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="flex items-center justify-between h-[40px] bg-blue-300 w-full px-[40px]">
      <div></div>
      <ul className="flex gap-[70px]">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-black"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="movie"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-black"}`
            }
          >
            Movie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="series"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-black"}`
            }
          >
            Series
          </NavLink>
        </li>
      </ul>
      <div className="text-[25px] cursor-pointer">
        <FaHeart />
      </div>
    </nav>
  );
}
