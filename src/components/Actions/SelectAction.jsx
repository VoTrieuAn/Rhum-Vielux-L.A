import { useProductContext } from "@context/ProductProvider";
import { dialogWithButton, draggableModal } from "@libs/sweet-alert";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SelectAction = ({ ids, setIds }) => {
  const [selectedValue, setSelectedValue] = useState("active");
  const { products, setProducts, loading, setLoading } = useProductContext();
  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  const handleApply = () => {
    const fetchRes = async () => {
      try {
        let response;
        let url = import.meta.env.VITE_API_URL + "/products";
        for (let id of ids) {
          const productData = {
            ...products.filter((product) => product.id === id),
          };
          switch (selectedValue) {
            case "active":
              // Cập nhật trạng thái sản phẩm thành "active"
              response = await fetch(`${url}/${id}`, {
                method: "PUT", // Sử dụng PATCH để cập nhật dữ liệu
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...productData, status: "active" }),
              });
              if (response.ok) {
                const updatedProduct = await response.json();
                setProducts((prev) =>
                  prev.map((product) => {
                    if (product.id === id) {
                      return {
                        ...product,
                        status: updatedProduct.status,
                      };
                    }
                    return product;
                  }),
                );
              } else {
                console.error(`Lỗi khi kích hoạt sản phẩm ${id}.`);
              }

              break;

            case "inactive":
              // Cập nhật trạng thái sản phẩm thành "inactive"
              response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...productData, status: "inactive" }),
              });
              if (response.ok) {
                const updatedProduct = await response.json();
                setProducts((prev) =>
                  prev.map((product) => {
                    if (product.id === id) {
                      return {
                        ...product,
                        status: updatedProduct.status,
                      };
                    }
                    return product;
                  }),
                );
              } else {
                console.error(`Lỗi khi dừng hoạt động sản phẩm ${id}.`);
              }
              break;

            case "delete-all":
              // Đánh dấu sản phẩm là đã xóa
              response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...productData, deleted: true }),
              });
              if (response.ok) {
                const updatedProduct = await response.json();
                setProducts((prev) =>
                  prev.filter((product) => product.id !== id),
                );
                setIds((prev) => prev.filter((item) => item !== id));
              } else {
                console.error(`Lỗi khi xóa sản phẩm ${id}.`);
              }

              break;

            default:
              console.error("Không có hành động nào được chọn.");
              break;
          }
        }
        draggableModal("Cập nhật thành công", "success");
      } catch (error) {
        draggableModal("Có lỗi xảy ra khi cập nhật sản phẩm", "error");
      }
    };

    dialogWithButton(
      "Bạn có chắc chắn muốn thực hiện hành động này?",
      fetchRes,
    );
  };

  return (
    <>
      <div className="relative w-45">
        <select
          className="w-full appearance-none rounded border bg-white px-3 py-1 pr-10 text-sm"
          onChange={handleSelectChange}
        >
          <option value="active">Hoạt động</option>
          <option value="inactive">Dừng hoạt động</option>
          <option value="delete-all">Xóa tất cả</option>
        </select>
        <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
          <ChevronDown size={14} />
        </div>
      </div>
      <button
        className="cursor-pointer rounded bg-blue-500 px-3 py-1 text-sm text-white"
        onClick={handleApply}
      >
        Áp dụng
      </button>
    </>
  );
};
export default SelectAction;
