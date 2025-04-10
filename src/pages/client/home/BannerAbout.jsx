import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const BannerAbout = () => {
  return (
    <>
      <section className="bg-background p-15">
        <div className="container mx-auto xl:px-6">
          <div className="flex gap-5">
            <div className="w-[50%]">
              <div className="relative z-10 w-[578px] overflow-hidden">
                <img
                  src="/banner/rhum-people-banner.jpg"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="flex w-[50%] flex-col">
              <div className="mb-2 flex items-center gap-3">
                <div className="font-bonheur text-9xl font-normal">G</div>
                <div className="">
                  <div className="font-bonheur text-[64px] leading-[100%]">
                    iới thiệu về
                  </div>
                  <div className="font-bellota ml-6.5 text-5xl font-[700]">
                    Rhum Long An
                  </div>
                </div>
              </div>
              <p className="mb-6.5 flex-1 text-justify text-[20px] leading-[36px] font-normal">
                Rượu Rhum Long An không chỉ là một thức uống, mà còn là hành
                trình trải nghiệm. Được làm từ những cây mía tươi ngon nhất,
                trải qua quy trình sản xuất chuyên nghiệp với kỹ thuật chưng cất
                tinh xảo, rượu mang đến hương vị cân bằng, tinh tế và đầy cuốn
                hút. Mỗi giọt rượu là sự kết tinh của thiên nhiên. <br />
                Không chỉ là sản phẩm của thiên nhiên, rượu rhum nơi đây còn kết
                tinh tâm huyết và kinh nghiệm của những người thợ lành nghề, tạo
                nên hương vị đặc trưng, khó quên.
              </p>
              <div className="inline-flex">
                <Link
                  to="/products"
                  className="bg-primary hover:text-primary hover:bg-primary/50 flex items-center justify-center gap-1.5 rounded-[46px] px-7 py-3 font-bold text-white transition-colors duration-300"
                >
                  Khám Phá Ngay
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerAbout;
