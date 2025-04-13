import Seo from "@components/Seo";
import ProductList from "./ProductList";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <>
      <Seo title="Tên của sản phẩm" />
      <div className="container mx-auto">
        <div className="h-[636px] flex py-[22px]">
          <div className="h-[560px] w-[592px] ">
            <img src="/rhum-detail-item.jpg" alt="" 
            className="h-full w-full object-cover rounded-[10px]"/>
          </div>
          <div className="px-[34px]">
            <div className="text-[#667479] gap-3.5 flex">
              <div>
                Trang chủ
              </div>
              <div>
                {'>'} 
              </div>
              <div>
                Sản phẩm
              </div>
              <div>
                {'>'} 
              </div>
              <div>
                RƯỢU CAM GIÁ - LONG AN
              </div>
            </div>
            <div>
              <h1 className="text-2xl"><strong>RƯỢU CAM GIÁ - LONG AN</strong></h1>
              <h1 className="text-20px text-[red]"><strong>600.000 VNĐ</strong></h1><br/>
              <div className="grid grid-cols-2 gap-y-5 h-auto">
                <div className="text-[red]">Xuất xứ</div>
                <div className="text-[#667479]">Việt Nam</div>

                <div className="text-[red]">Dung tích</div>
                <div className="text-[#667479]">500 ml</div>

                <div className="text-[red]">Nồng độ</div>
                <div className="text-[#667479]">≥ 26%</div>

                <div className="text-[red]">Chọn loại hàng:</div>
                <div className="flex flex-wrap gap-2">
                  <button className="border border-[gray] text-[#667479] rounded px-3 py-1 text-sm hover:bg-gray-100">1 chai</button>
                  <button className="border border-[gray] text-[#667479] rounded px-3 py-1 text-sm hover:bg-gray-100">Thùng 6 chai</button>
                  <button className="border border-[gray] text-[#667479] rounded px-3 py-1 text-sm hover:bg-gray-100">Thùng 12 chai</button>
                  <button className="border border-[gray] text-[#667479] rounded px-3 py-1 text-sm hover:bg-gray-100">Thùng 20 chai</button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-[20px]">
              <div className="flex items-center border border-[gray] rounded px-3 py-1 w-fit">
                <button className="text-xl px-2">−</button>
                <span className="px-4">1</span>
                <button className="text-xl px-2">+</button>
              </div>
              <button className="border border-[gray] rounded px-3 py-1 text-sm hover:bg-gray-100 hover:scale-105">Thêm vào giỏ</button>
              <button className="border bg-[black] text-[white] rounded px-3 py-1 text-sm hover:scale-105">Mua ngay</button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
              </svg>
              <h1>Chia sẻ:</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <a href="#" className="hover:text-blue-600">
                  <FaFacebook className="text-2xl"/>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaTwitter className="text-2xl"/>
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaInstagram className="text-2xl"/>
                </a>
                <a href="#" className="hover:text-red-600">
                  <FaYoutube className="text-2xl"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-1 py-[60px]">
          <h1><strong className="text-[#3A1A15]">Thông tin sản phẩm</strong></h1>
          <br></br>
          <p>
            <h1><strong className="text-[#AF6900]">Đôi nét về Rượu Rhum:</strong></h1>
            <p><h1 className="text-justify">Rượu Rhum tự hào là nhà sản xuất rượu chất lượng cao, mang đến hương vị đậm đà, tinh tế. 
              Sản phẩm của chúng tôi được chưng cất từ mật mía hoặc mía đường lên men, 
              kết hợp cùng quy trình ủ nghiêm ngặt, giúp tạo nên vị rượu thơm ngon, êm dịu. 
              Chúng tôi áp dụng công nghệ sản xuất hiện đại, đạt chuẩn ISO 22000:2018, 
              đảm bảo vệ sinh an toàn thực phẩm và giữ trọn vẹn tinh hoa của rượu Rhum.</h1></p>
          </p>
          <br></br>
          <p>
            <h1><strong className="text-[#AF6900]">Thành phần:</strong></h1>
            <p><h1 className="text-justify">Mật mía lên men, nước đã qua xử lý.</h1></p>
          </p>
          <br></br>
          <p>
            <h1><strong className="text-[#AF6900]">Bảo quản / Lưu ý:</strong></h1>
            <p><h1 className="text-justify">- Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.<br/>
                    - Sản phẩm dành cho khách hàng trên 18 tuổi, không dành cho phụ nữ mang thai.<br/>
                    - Thưởng thức có trách nhiệm, đã uống đồ uống có cồn thì không lái xe!</h1></p>
          </p>          
          <br></br>
          <p>
            <h1><strong className="text-[#AF6900]">Cách sử dụng:</strong></h1>
            <p><h1 className="text-justify">- Uống trực tiếp hoặc pha chế cocktail để tạo ra những hương vị độc đáo.</h1></p>
          </p>
          <br></br>
          <p>
            <h1><strong className="text-[#AF6900]">Rhum Vielux L.A</strong></h1>
            <p><h1 className="text-justify">Địa chỉ: Số 327Đ/2, ĐT 825, khu phố 4, thị trấn Đức Hòa, huyện Đức Hòa, tỉnh Long An.<br/>
                    Hotline: 0919.93.83.79<br/>
                    Facebook: An Vo Ve Tới chơi<br/>
                    Zalo: An Vo</h1></p>
          </p>
        </div>
        <div>
          <div className="text-[#3A1A15]">
            <strong>
              Xem thêm loại rượu
            </strong>
          </div>
          <ProductList></ProductList>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
