import { MENU_ADMIN } from "@libs/constant";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <aside className="bg-gray-800 text-white">
        <nav className="flex flex-col">
          {MENU_ADMIN.map((item) => (
            <Link
              to={item.path}
              className={`cursor-pointer border-b border-gray-700 p-3 hover:bg-gray-700 ${pathname === item.path ? "bg-gray-700" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};
export default Sidebar;
