import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="py-7">
      <div className="container mx-auto xl:px-6">
        <div className="flex items-center justify-between">
          <div className="h-[60px] overflow-hidden">
            <img
              src="/logo-rhum-la.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <nav className="flex-1">
            <ul className="flex items-center justify-center gap-11">
              <li className="text-primary font-bold">Trang Chủ</li>
              <li className="text-primary/60 font-bold">Giới Thiệu</li>
              <li className="text-primary/60 font-bold">Sản Phẩm</li>
              <li className="text-primary/60 font-bold">Liên Hệ</li>
            </ul>
          </nav>
          <div className="flex h-11 items-center gap-3.5">
            <div className="flex h-full w-[280px] items-center gap-3 rounded-[46px] bg-[#F3F3F3] px-4 py-3">
              <IoIosSearch className="text-[20px] text-[#667479]" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Nhập từ khóa..."
                className="text-[14px] outline-none placeholder:font-[500]"
              />
            </div>
            <div className="text-primary relative flex gap-3.5 text-[35px]">
              <FiUser />
              <MdOutlineShoppingCart className="" />
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
