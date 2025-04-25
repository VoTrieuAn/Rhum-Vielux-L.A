import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { MENU_CLIENT } from "@libs/constant";
import { Link, Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/about") {
    Swal.fire({
      title: "Trang chưa sẵn sàng",
      icon: "warning",
      draggable: true,
    });
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <header
      className={`sticky top-0 left-0 z-[999] stroke-current p-3 px-4.5 shadow-sm sm:px-6 sm:py-4 ${pathname === "/" ? "bg-surface" : "bg-white"}`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-3">
          <CiMenuBurger className="hover:text-secondary text-primary block cursor-pointer text-[32px] transition-colors duration-300 sm:text-[35px] lg:hidden" />
          {/* Sẽ code lại logo riêng và chữ riêng */}
          <Link to={"/"} className="h-11 overflow-hidden sm:h-15">
            <img
              src="/logo-rhum-la.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </Link>
          <nav className="hidden flex-2 lg:inline-block">
            <ul className="flex items-center justify-center lg:gap-6 xl:gap-11">
              {MENU_CLIENT.map((item) => (
                <li key={item.path} className="text-[16px]">
                  <Link
                    to={item.path}
                    className={`transition-colors duration-300 ${item.path === pathname ? "text-primary" : "text-primary/60 hover:text-primary"} font-bold`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex h-11 items-center justify-end gap-3.5 lg:flex-1">
            <div className="hidden h-full w-[280px] items-center gap-3 rounded-[46px] bg-[#F3F3F3] px-4 py-3 lg:flex">
              <IoIosSearch className="text-[20px] text-[#667479]" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Nhập từ khóa..."
                className="text-[14px] outline-none placeholder:font-[500]"
              />
            </div>
            <div className="text-primary relative flex gap-3.5 text-[32px] sm:text-[35px]">
              <IoIosSearch className="hover:text-secondary inline-block cursor-pointer transition-colors duration-300 lg:hidden" />
              <FiUser className="hover:text-secondary cursor-pointer transition-colors duration-300" />
              <MdOutlineShoppingCart className="hover:text-secondary cursor-pointer transition-colors duration-300" />
              {/*right-[-6px] && > 10  right-[-16px] && > 99 99+ right-[-20px] */}
              <div className="absolute top-[-10px] right-[-6px] block rounded-full bg-[#FF0000] px-[5px] text-[15px] text-white">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
