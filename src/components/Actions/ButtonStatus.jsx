import { useProductContext } from "@context/ProductProvider";
import { dialogWithButton, draggableModal } from "@libs/sweet-alert";
import { useEffect, useState } from "react";

const ButtonStatus = ({ id, status }) => {
  const [product, setProduct] = useState({});
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    setProduct(products.find((product) => product.id === id));
  }, [id, products]);

  const handleStatus = () => {
    const fetchRes = async () => {
      const productData = {
        ...product,
        status: status === "active" ? "inactive" : "active",
      };
      console.log();
      const saveRes = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        },
      );

      if (!saveRes.ok) {
        draggableModal(
          "Thay đổi trạng thái sản phẩm thất bại! Có lỗi xãy ra",
          "error",
        );
        return;
      }

      draggableModal("Thay đổi trạng thái sản phẩm thành công", "success");

      setProducts((prev) =>
        prev.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              status: productData.status,
            };
          }
          return product;
        }),
      );
    };

    dialogWithButton(
      "Bạn có thật sự muốn thay đổi trạng thái của sản phẩm hiện tại?",
      fetchRes,
    );
  };

  return (
    <button
      className={`cursor-pointer rounded-full ${status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} px-2 py-1 text-xs`}
      onClick={handleStatus}
    >
      {status}
    </button>
  );
};
export default ButtonStatus;
