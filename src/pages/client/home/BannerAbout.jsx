import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const BannerAbout = () => {
  return (
    <>
      <section className="bg-background px-4.5 py-10 sm:px-6 xl:py-15">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="h-auto w-full overflow-hidden rounded-2xl">
              <img
                src="/banner/rhum-people-banner.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-full flex-col">
              <div className="mb-2 flex items-center gap-3">
                <div className="font-bonheur text-8xl font-normal sm:text-[112px] lg:text-9xl">
                  G
                </div>
                <div className="">
                  <div className="font-bonheur text-5xl leading-[100%] sm:text-[56px] lg:text-[64px]">
                    iới thiệu về
                  </div>
                  <div className="font-bellota text-4xl font-[700] sm:ml-5 sm:text-[42px] lg:ml-6.5 lg:text-5xl">
                    Rhum Long An
                  </div>
                </div>
              </div>
              <p className="mb-6.5 flex-1 text-justify leading-[36px] font-normal sm:text-[16px] lg:text-[20px]">
                Rượu Rhum Long An không chỉ là một thức uống, mà còn là hành
                trình trải nghiệm. Được làm từ những cây mía tươi ngon nhất,
                trải qua quy trình sản xuất chuyên nghiệp với kỹ thuật chưng cất
                tinh xảo, rượu mang đến hương vị cân bằng, tinh tế và đầy cuốn
                hút. Mỗi giọt rượu là sự kết tinh của thiên nhiên. <br />
                Không chỉ là sản phẩm của thiên nhiên, rượu rhum nơi đây còn kết
                tinh tâm huyết và kinh nghiệm của những người thợ lành nghề, tạo
                nên hương vị đặc trưng, khó quên.
              </p>
              <div className="block lg:inline-flex">
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
