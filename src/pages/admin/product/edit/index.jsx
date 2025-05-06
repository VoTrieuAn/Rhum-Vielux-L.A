import { useState, useRef } from "react";
import MyEditor from "@utils/MyEditor";
import { draggableModal } from "@libs/sweet-alert";
import { normalized } from "@libs/slug";
import { useProductContext } from "@context/ProductProvider";
import { useParams } from "react-router-dom";

const ProductEditPage = () => {
  const { id } = useParams();
  const { products, setProducts } = useProductContext();
  const product = products.find((item) => item.id === id);
  const [title, setTitle] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [alcohol, setAlcohol] = useState(product?.alcohol || 0);
  const [stock, setStock] = useState(product?.stock || 0);
  const [position, setPosition] = useState(product?.position || "");
  const [isActive, setIsActive] = useState(product?.status === "active");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      setDescription(editorRef.current.getContent());
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = product?.image;

      // Nếu có ảnh mới, upload lên cloudinary
      if (selectedFile) {
        const uploadUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`;
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append(
          "upload_preset",
          import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        );

        const uploadRes = await fetch(uploadUrl, {
          method: "POST",
          body: formData,
        });
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.secure_url;
      }

      const slug = normalized(title);
      const productData = {
        name: title,
        description: editorRef.current
          ? editorRef.current.getContent()
          : description,
        origin: product.origin || "Việt Nam",
        price: Number(price),
        alcohol: Number(alcohol),
        stock: Number(stock),
        image: imageUrl,
        position: Number(position),
        slug,
        status: isActive ? "active" : "inactive",
        deleted: false,
      };

      // Dùng PUT hoặc PATCH thay vì POST để cập nhật
      const saveRes = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        },
      );

      if (!saveRes.ok) {
        draggableModal("Cập nhật sản phẩm thất bại", "error");
        return;
      }

      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === id ? { ...item, ...productData } : item,
        ),
      );
      draggableModal("Cập nhật sản phẩm thành công", "success");
    } catch (err) {
      draggableModal("Có lỗi xảy ra", "error");
    }
  };

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Thêm mới sản phẩm</h1>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-medium">
              Tiêu đề
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium"
            >
              Mô tả
            </label>
            <MyEditor value={description} editorRef={editorRef} />
          </div>
          {/* Price */}
          <div>
            <label htmlFor="price" className="mb-1 block text-sm font-medium">
              Giá
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Alcohol */}
          <div>
            <label htmlFor="alcohol" className="mb-1 block text-sm font-medium">
              Nồng độ
            </label>
            <input
              type="number"
              id="alcohol"
              value={alcohol}
              onChange={(e) => setAlcohol(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="stock" className="mb-1 block text-sm font-medium">
              Số lượng
            </label>
            <input
              type="number"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Image */}
          <div>
            <label htmlFor="image" className="mb-1 block text-sm font-medium">
              Ảnh
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleFileButtonClick}
                className="rounded bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300"
              >
                Choose File
              </button>
              <span className="ml-3 text-sm text-gray-500">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </span>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </div>
            {selectedFile ? (
              <div className="mt-2 inline-flex h-25 w-auto overflow-hidden">
                <img
                  src={selectedFile ? URL.createObjectURL(selectedFile) : ""}
                  alt={title}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="mt-2 inline-flex h-25 w-auto overflow-hidden">
                <img
                  src={product?.image}
                  alt={title}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Position */}
          <div>
            <label
              htmlFor="position"
              className="mb-1 block text-sm font-medium"
            >
              Vị trí
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Status */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="active"
                  name="status"
                  checked={isActive}
                  onChange={() => setIsActive(true)}
                  className="mr-2"
                />
                <label htmlFor="active" className="text-sm">
                  Hoạt động
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  checked={!isActive}
                  onChange={() => setIsActive(false)}
                  className="mr-2"
                />
                <label htmlFor="inactive" className="text-sm">
                  Dừng hoạt động
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              onClick={log}
              className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductEditPage;
