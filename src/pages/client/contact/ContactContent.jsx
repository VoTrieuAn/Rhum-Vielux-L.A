const ContactContent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <div className="p-normal">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="information flex flex-col gap-2.5 text-[13px]">
            <p className="font-bold uppercase">
              HỘ KINH DOANH CƠ SỞ SẢN XUẤT RƯỢU ĐỨC HÒA
            </p>
            <p>
              Giấy chứng nhận đăng ký hộ kinh doanh số: <span>50H8027879</span>
            </p>
            <p>
              <span>
                Đăng ký lần đầu, ngày 11 tháng 10 năm 2022, Bởi Phòng Tài Chính
                Kế Hoạch Huyện Đức Hòa.
              </span>
            </p>

            <p>
              Địa chỉ: Số nhà:{" "}
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
          <div className="">
            <form
              className="flex w-full flex-col gap-4 text-[14px]"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ tên"
                  className="rounded-[4px] border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-blue-200"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  className="rounded-[4px] border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-blue-200"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="address"
                  placeholder="Địa chỉ"
                  className="rounded-[4px] border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-blue-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="rounded-[4px] border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-blue-200"
                />
              </div>
              <input
                type="text"
                name="topic"
                placeholder="Chủ đề"
                className="w-full rounded-[4px] border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-blue-200"
              />
              <textarea
                name=""
                rows="5"
                placeholder="Nội dung"
                className="w-full rounded-[4px] border border-gray-300 px-3 py-2 focus:outline-2 focus:outline-blue-200"
                style={{ resize: "none" }}
              ></textarea>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="cursor-pointer rounded-[6px] bg-blue-500 px-3 py-2 text-white hover:bg-blue-400"
                >
                  Gửi
                </button>

                <button
                  type="reset"
                  className="cursor-pointer rounded-[6px] bg-gray-500 px-3 py-2 text-white hover:bg-gray-400"
                >
                  Nhập lại
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactContent;
