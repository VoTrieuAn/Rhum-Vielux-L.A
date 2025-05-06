import { useProductContext } from "@context/ProductProvider";
import { dialogWithButton, draggableModal } from "@libs/sweet-alert";
import { useEffect, useRef, useState } from "react";

const PositionAction = ({ id, value = "" }) => {
  const [product, setProduct] = useState({});
  const { products, loading, setLoading } = useProductContext();
  const ref = useRef("");

  useEffect(() => {
    setProduct(products.find((product) => product.id === id));
  }, [id, products]);

  const handleChange = () => {
    const newValue = ref.current.value;
    const fetchRes = async () => {
      const productData = {
        ...product,
        position: Number(newValue),
      };
      console.log(productData);
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
          "Thay đổi vị trí sản phẩm thất bại! Có lỗi xãy ra",
          "error",
        );
        return;
      }

      draggableModal("Thay đổi vị trí sản phẩm thành công", "success");

      setLoading(!loading);
    };

    dialogWithButton(
      "Bạn có thật sự muốn thay đổi vị trí của sản phẩm hiện tại?",
      fetchRes,
    );
  };
  return (
    <input
      ref={ref}
      type="text"
      defaultValue={value}
      className="w-12 rounded border px-2 py-1 text-center"
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          handleChange();
        }
      }}
    />
  );
};
export default PositionAction;
