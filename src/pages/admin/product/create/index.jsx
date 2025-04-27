import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import MyEditor from "@utils/MyEditor";

const ProductCreatePage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [position, setPosition] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      title,
      category,
      isFeatured,
      description,
      price,
      discount,
      quantity,
      position,
      isActive,
      selectedFile,
    });
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

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-medium"
            >
              Danh mục cha
            </label>
            <div className="relative">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded border border-gray-300 bg-white px-3 py-2 text-left"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-gray-500">
                  {category || "-- Chọn danh mục cha --"}
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-lg">
                  <ul>
                    <li
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setCategory("Danh mục 1");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Danh mục 1
                    </li>
                    <li
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setCategory("Danh mục 2");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Danh mục 2
                    </li>
                    <li
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setCategory("Danh mục 3");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Danh mục 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Featured */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="featured"
                  name="featured"
                  checked={isFeatured}
                  onChange={() => setIsFeatured(true)}
                  className="mr-2"
                />
                <label htmlFor="featured" className="text-sm">
                  Nổi bật
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="notFeatured"
                  name="featured"
                  checked={!isFeatured}
                  onChange={() => setIsFeatured(false)}
                  className="mr-2"
                />
                <label htmlFor="notFeatured" className="text-sm">
                  Không
                </label>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium"
            >
              Mô tả
            </label>
            <MyEditor editorRef={editorRef} />
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
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Discount */}
          <div>
            <label
              htmlFor="discount"
              className="mb-1 block text-sm font-medium"
            >
              Giảm giá
            </label>
            <input
              type="number"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="mb-1 block text-sm font-medium"
            >
              Số lượng
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
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
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Tạo mới
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductCreatePage;
