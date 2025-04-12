import { LEGAL_ITEMS } from "@libs/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-error-100 pagination px-4.5 py-10">
        <div className="container mx-auto">
          {/* Pc */}
          <div className="hidden grid-cols-1 gap-3 md:grid md:grid-cols-3 lg:gap-5">
            {LEGAL_ITEMS.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-10">
                <div className="h-auto w-15 overflow-hidden lg:w-20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-7">
                  <p className="text-error-200 mb-3.5 line-clamp-1 text-center text-[16px] font-bold lg:text-[18px]">
                    {item.title}
                  </p>
                  <p className="line-clamp-3 text-center text-[14px] font-normal lg:text-[16px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile */}
          <div className="block md:hidden">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {LEGAL_ITEMS.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-5 sm:gap-10"
                  >
                    <div className="h-auto w-15 overflow-hidden lg:w-20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-7">
                      <p className="text-error-200 mb-3.5 line-clamp-1 text-center text-[16px] font-bold lg:text-[18px]">
                        {item.title}
                      </p>
                      <p className="line-clamp-3 text-center text-[14px] font-normal lg:text-[16px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </footer>
      <footer className="bg-background px-4.5 py-10">
        <div className="container mx-auto">
          <div className="text-9e grid grid-cols-1 gap-3 text-[14px] md:grid-cols-3 lg:gap-5 lg:text-[16px]">
            <div className="flex flex-col items-center gap-3">
              <div className="h-auto w-30 overflow-hidden md:w-37.5">
                <img
                  src="/logo-rhum.svg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-center text-[18px] font-bold uppercase lg:w-55 lg:text-[20px]">
                HỘ KINH DOANH CƠ SỞ SẢN XUẤT RƯỢU ĐỨC HÒA
              </p>
              <p className="text-center font-normal">
                Rượu Rhum Long An tự hào là sản phẩm thủ công truyền thống, kết
                tinh từ những cây mía ngọt lành được tuyển chọn kỹ lưỡng, chưng
                cất theo quy trình chuẩn mực với kỹ thuật tinh xảo. Hương vị cân
                bằng, tinh tế, mang đến trải nghiệm đậm đà bản sắc.
              </p>
            </div>
            <div className="information flex flex-col gap-2.5">
              <h3 className="border-b-secondary w-50 border-b-1 pb-4 text-[16px] font-bold tracking-[2px] text-[#482817] uppercase">
                Thông tin liên hệ
              </h3>
              <p className="text-[16px] font-bold uppercase">
                HỘ KINH DOANH CƠ SỞ SẢN XUẤT RƯỢU ĐỨC HÒA
              </p>
              <p>
                MST: <span>8782116002-001</span>
              </p>
              <p>
                Đại diện pháp luật: <span>Đào Thị Kim Thu</span>
              </p>
              <p>
                Mã số thuế cá nhân số: <span>8040979805</span>. Ngày cấp:{" "}
                <span>19-03-2025.</span> Nơi cấp:{" "}
                <span>
                  Chi cục Thuế khu vực Huyện Đức Hòa - Đội Thuế liên huyện Đức
                  Hòa - Đức Huệ
                </span>
              </p>
              <p>
                Giấy chứng nhận đăng ký hộ kinh doanh số:{" "}
                <span>
                  50H8027879. Đăng ký lần đầu, ngày 11 tháng 10 năm 2022, Bởi
                  Phòng Tài Chính Kế Hoạch Huyện Đức Hòa.
                </span>
              </p>
              <p>
                Địa chỉ:{" "}
                <span>
                  Số 327Đ/2, ĐT 825, khu phố 4, thị trấn Đức Hòa, huyện Đức Hòa,
                  tỉnh Long An.
                </span>
              </p>
              <p>
                Điện thoại: <span>0971484472</span>
              </p>
              <div>Thời gian làm việc:</div>
              <p>7:00 – 17h30 </p>
              <p>(Từ thứ 2 – thứ 7)</p>
              <p>Website:</p>
              <p>Email:</p>
            </div>
            <div>
              <h3 className="border-b-secondary w-56 border-b-1 pb-4 text-[16px] font-bold tracking-[2px] text-[#482817] uppercase">
                CHÍNH SÁCH BẢO MẬT
              </h3>
              <ul className="security mt-2 flex flex-col gap-2.5">
                <li className="">
                  <Link to="/">Điều khoản sử dụng</Link>
                </li>
                <li className="">
                  <Link to="/">Hướng dẫn mua hàng</Link>
                </li>
                <li className="">
                  <Link to="/">Chính sách giao nhận</Link>
                </li>
                <li className="">
                  <Link to="/">Chính sách đổi trả</Link>
                </li>
                <li className="">
                  <Link to="/">Chính sách thanh toán</Link>
                </li>
                <li className="">
                  <Link to="/">Chính sách bảo mật</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-secondary py-2 text-center text-[14px] font-normal text-white md:text-[16px]">
        Copyright © 2025 RƯỢU RHUM LONG AN. All rights reserved. Design by An
        Vo and Bao To
      </div>
    </>
  );
};
export default Footer;
