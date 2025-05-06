import { useProductContext } from "@context/ProductProvider";
import { dialogWithButton, draggableModal } from "@libs/sweet-alert";
import { useEffect, useState } from "react";

const ButtonDelete = ({ id }) => {
  const [product, setProduct] = useState({});
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    setProduct(products.find((product) => product.id === id));
  }, [id, products]);

  const handleDelete = () => {
    const fetchRes = async () => {
      const productData = {
        ...product,
        deleted: true,
      };
      const saveRes = await fetch(
        `https://680cbacf2ea307e081d4de69.mockapi.io/api/v1/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        },
      );

      if (!saveRes.ok) {
        draggableModal("Xóa sản phẩm thất bại! Có lỗi xãy ra", "error");
        return;
      }

      draggableModal("Xóa sản phẩm thành công", "success");

      setProducts((prev) => prev.filter((product) => product.id !== id));
    };

    dialogWithButton("Bạn có thật sự muốn xóa?", fetchRes);
  };

  return (
    <button
      className="cursor-pointer rounded bg-red-500 px-2 py-1 text-xs text-white"
      onClick={handleDelete}
    >
      Xóa
    </button>
  );
};
export default ButtonDelete;
