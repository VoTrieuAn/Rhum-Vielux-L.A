import { PREFIX_ADMIN } from "@config/system";
import { Link } from "react-router-dom";

const ButtonEdit = ({ id }) => {
  return (
    <Link
      to={`/${PREFIX_ADMIN}/products/edit/${id}`}
      className="rounded bg-yellow-500 px-2 py-1 text-xs text-white"
    >
      Sửa
    </Link>
  );
};
export default ButtonEdit;
