import { PREFIX_ADMIN } from "@config/system";

export const MENU_CLIENT = [
  {
    name: "Trang Chủ",
    path: "/",
  },
  {
    name: "Giới Thiệu",
    path: "/about",
  },
  {
    name: "Sản Phẩm",
    path: "/products",
  },
  {
    name: "Liên Hệ",
    path: "/contact",
  },
];

export const MENU_ADMIN = [
  {
    name: "Tổng Quan",
    path: `/${PREFIX_ADMIN}/dashboard`,
  },
  // {
  //   name: "Danh mục sản phẩm",
  //   path: `/${PREFIX_ADMIN}/categories`,
  // },
  {
    name: "Danh sách sản phẩm",
    path: `/${PREFIX_ADMIN}/products`,
  },
];

export const ADVANTAGE_ITEMS = [
  {
    id: 1,
    image: "/advantage/advimage-1.png",
    title: "Không khô cổ",
  },
  {
    id: 2,
    image: "/advantage/advimage-2.png",
    title: "Không khát nước",
  },
  {
    id: 3,
    image: "/advantage/advimage-3.png",
    title: "Không nhức đầu",
  },
];

export const REVIEW_ITEMS = [
  {
    id: 1,
    image: "/avatar/avatar-1.jpg",
    name: "Tô Phan Gia Bảo",
    role: "Khách hàng",
    rating: 4,
    review:
      "Tôi đã mua chai rượu Rhum này để thử... và giờ tôi đang tự hỏi tại sao mình không mua cả thùng! 🤯 Vừa mở nắp, hương thơm bay ra như một lời thì thầm ngọt ngào, mời gọi tôi nếm thử. Một ngụm thôi mà tôi đã cảm thấy mình như quý tộc thời xưa",
  },
  {
    id: 2,
    image: "/avatar/avatar-2.jpg",
    name: "Lê Ngọc Dung",
    role: "Khách hàng",
    rating: 5,
    review:
      'Ban đầu chỉ định thử một ly cho biết, ai ngờ uống một ngụm là mê luôn! 😍 Hương thơm dịu dàng, vị ngọt nhẹ nhưng vẫn có chút mạnh mẽ đầy cuốn hút, đúng kiểu "nữ tính mà không yếu đuối". Một chai là không đủ, lần sau phải rủ hội bạn mua chung cả thùng mới được!',
  },
  {
    id: 3,
    image: "/avatar/avatar-3.jpg",
    name: "Võ Triều An",
    role: "Khách hàng",
    rating: 5,
    review:
      "Uống một ngụm mà cứ ngỡ đang lạc vào một hầm rượu cổ kính, nơi hương mía hòa quyện cùng gỗ sồi tạo nên một sự kết hợp hoàn hảo. Vừa êm, vừa sâu lắng, nhưng vẫn đủ mạnh để đánh thức mọi giác quan! 🍷🔥 Nếu bạn chưa thử, thì chắc chắn là đang bỏ lỡ một kiệt tác!",
  },
];

export const LEGAL_ITEMS = [
  {
    id: 1,
    image: "/legal/legal-1.png",
    title: "Chấp Hành Điều 16 Của Luật Phòng Chống Tác Hại Của Rượu, Bia",
    description:
      "Website chấp hành Điều 16 của Luật Phòng, chống tác hại của rượu, bia số 44/2019/QH14 do Quốc Hội ban hành ngày 14 tháng 06 năm 2019 về Điều kiện bán rượu, bia theo hình thức thương mại điện tử Website chấp hành Nghị định số 24/2020/NĐ-CP quy định quy định chi tiết một số điều của Luật Phòng, chống tác hại của rượu, bia.",
  },
  {
    id: 2,
    image: "/legal/legal-2.png",
    title: "Tuân Thủ Nghị Định",
    description:
      "Trang web này tuân thủ Nghị định số 185/2013/NĐ-CP của Chính phủ và luật quảng cáo số 16/2012/QH13 về kinh doanh bán hàng qua mạng.",
  },
  {
    id: 3,
    image: "/legal/legal-3.png",
    title: "Không Bán Hàng Cho Người Dưới 18 Tuổi",
    description: "Công ty chúng tôi không bán hàng cho người dưới 18 tuổi.",
  },
];

export const PRODUCT_DETAILS = [
  { label: "Xuất xứ", value: "Việt Nam" },
  { label: "Dung tích", value: "500 ml" },
  { label: "Nồng độ", value: "≥ 26%" },
];

export const FILTER_ITEMS = [
  {
    id: 1,
    title: "Nồng độ",
    valueFilter: [
      { id: "lt-30", name: "Dưới 30%" },
      { id: "30-40", name: "Từ 30% - 40%" },
      { id: "gt-40", name: "Trên 40%" },
    ],
  },
  {
    id: 2,
    title: "Dung tích",
    valueFilter: [
      { id: "300", name: "300 ml" },
      { id: "500", name: "500 ml" },
      { id: "700", name: "750 ml" },
    ],
  },
  {
    id: 3,
    title: "Giá",
    valueFilter: [
      { id: "200", name: "Dưới 200.000đ" },
      { id: "200-500", name: "200.000đ – 500.000đ" },
      { id: "500-1000", name: "500.000đ – 1.000.000đ" },
    ],
  },
];

export const PACKAGE_PRODUCT = [
  "1 chai",
  "Thùng 6 chai",
  "Thùng 12 chai",
  "Thùng 20 chai",
];
