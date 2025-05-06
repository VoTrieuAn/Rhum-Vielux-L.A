import { PREFIX_ADMIN } from "@config/system";
import { Link } from "react-router-dom";

const ButtonDetail = ({ id }) => {
  return (
    <Link
      to={`/${PREFIX_ADMIN}/products/detail/${id}`}
      className="rounded bg-gray-600 px-2 py-1 text-xs text-white"
    >
      Chi tiết
    </Link>
  );
};
export default ButtonDetail;
