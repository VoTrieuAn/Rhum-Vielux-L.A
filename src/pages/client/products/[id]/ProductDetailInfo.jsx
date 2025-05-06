const ProductDetailInfo = () => {
  return (
    <>
      <section className="p-normal">
        <div className="container">
          <div className="flex flex-col gap-3 text-[14px] leading-9 sm:text-[20px] lg:gap-5 lg:text-2xl">
            <h3 className="text-primary text-2xl font-bold">
              Thông tin sản phẩm
            </h3>

            <h4 className="text-secondary font-bold capitalize">
              Đôi nét về Rượu Rhum:
            </h4>
            <p>
              Rượu Rhum tự hào là nhà sản xuất rượu chất lượng cao, mang đến
              hương vị đậm đà, tinh tế. Sản phẩm của chúng tôi được chưng cất từ
              mật mía hoặc mía đường lên men, kết hợp cùng quy trình ủ nghiêm
              ngặt, giúp tạo nên vị rượu thơm ngon, êm dịu. Chúng tôi áp dụng
              công nghệ sản xuất hiện đại, đạt chuẩn ISO 22000:2018, đảm bảo vệ
              sinh an toàn thực phẩm và giữ trọn vẹn tinh hoa của rượu Rhum.
            </p>

            <h4 className="text-secondary font-bold capitalize">Thành phần:</h4>
            <p>Mật mía lên men, nước đã qua xử lý.</p>

            <h4 className="text-secondary font-bold capitalize">
              Bảo quản / Lưu ý:
            </h4>
            <ul className="list-disc pl-10">
              <li>
                Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.
              </li>
              <li>
                Sản phẩm dành cho khách hàng trên 18 tuổi, không dành cho phụ nữ
                mang thai.
              </li>
              <li>
                Thưởng thức có trách nhiệm, đã uống đồ uống có cồn thì không lái
                xe!
              </li>
            </ul>

            <h4 className="text-secondary font-bold capitalize">
              Cách sử dụng:
            </h4>
            <p>
              Uống trực tiếp hoặc pha chế cocktail để tạo ra những hương vị độc
              đáo
            </p>

            <h4 className="text-secondary font-bold capitalize">
              Rhum Vielux L.A:
            </h4>
            <p>
              <span className="font-bold">Địa chỉ:</span> Số 327Đ/2, ĐT 825, khu
              phố 4, thị trấn Đức Hòa, huyện Đức Hòa, tỉnh Long An.
            </p>
            <p>
              <span className="font-bold">Hotline:</span> 0919.93.83.79
            </p>
            <p>
              <span className="font-bold">Facebook:</span> An Vo Ve Tới chơi
            </p>
            <p>
              <span className="font-bold">Zalo:</span>  An Vo
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetailInfo;
