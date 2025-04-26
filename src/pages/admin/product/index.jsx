import { Search, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      title: "Sản phẩm DDDDD",
      image: "/placeholder.svg?height=80&width=80",
      price: "1000$",
      position: 36,
      status: "Hoạt động",
      createdBy: "Võ Triều An",
      createdAt: "22/09/2024 11:52:34",
    },
    {
      id: 2,
      title: "iPhone 15 Pro Max 512GB | Chính hãng VN/A",
      image: "/placeholder.svg?height=80&width=80",
      price: "1500$",
      position: 35,
      status: "Hoạt động",
      createdBy: "Võ Triều An",
      createdAt: "20/08/2024 20:07:08",
    },
    {
      id: 3,
      title: "Chó chó nhỏ dễ thương quà tròn quà đặt",
      image: "/placeholder.svg?height=80&width=80",
      price: "0$",
      position: 34,
      status: "Hoạt động",
      createdBy: "Võ Triều An",
      createdAt: "19/08/2024 13:53:36",
    },
    {
      id: 4,
      title: "Sản phẩm 01 abc",
      image: "/placeholder.svg?height=80&width=80",
      price: "120$",
      position: 31,
      status: "Hoạt động",
      createdBy: "",
      createdAt: "",
    },
    {
      id: 5,
      title: "Honey Jar",
      image: "/placeholder.svg?height=80&width=80",
      price: "6$",
      position: 27,
      status: "Hoạt động",
      createdBy: "",
      createdAt: "",
    },
  ];

  return (
    <>
      {/* Main Content */}
      <h1 className="mb-4 text-3xl font-bold">Danh sách sản phẩm</h1>

      {/* Filters */}
      <div className="mb-6">
        <div className="mb-2 text-sm text-gray-600">Bộ lọc và tìm kiếm</div>
        <div className="flex items-center justify-between">
          <div className="mb-4 flex gap-2">
            <button
              className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "all" ? "bg-green-500 text-white" : "border bg-white"}`}
              onClick={() => setActiveTab("all")}
            >
              Tất cả
            </button>
            <button
              className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "active" ? "bg-green-500 text-white" : "border bg-white"}`}
              onClick={() => setActiveTab("active")}
            >
              Hoạt động
            </button>
            <button
              className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "inactive" ? "bg-green-500 text-white" : "border bg-white"}`}
              onClick={() => setActiveTab("inactive")}
            >
              Dừng hoạt động
            </button>
          </div>

          {/* Search */}
          <div className="mb-4 flex gap-3">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Nhập từ khóa"
                className="w-full rounded border px-3 py-2 pr-10"
              />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 transform text-gray-500">
                <Search size={18} />
              </button>
            </div>
            <button className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white">
              Tìm
            </button>
          </div>
        </div>

        {/* Sort */}
        <div className="mb-4">
          <div className="mb-2 text-sm text-gray-600">Sắp xếp</div>
          <div className="flex gap-2">
            <div className="relative w-64">
              <select className="w-full appearance-none rounded border bg-white px-3 py-2 pr-10">
                <option>Vị trí giảm dần</option>
                <option>Vị trí tăng dần</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
                <ChevronDown size={16} />
              </div>
            </div>
            <button className="rounded bg-red-500 px-3 py-1 text-white">
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="mb-4 rounded-md bg-white shadow-sm">
        <div className="border-b p-4">
          <div className="text-sm font-medium">Danh sách</div>
        </div>

        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="relative w-40">
              <select className="w-full appearance-none rounded border bg-white px-3 py-1 pr-10 text-sm">
                <option value="active">Hoạt động</option>
                <option value="inactive">Dừng hoạt động</option>
                <option value="position">Thay đổi vị trí</option>
                <option value="delete-all">Xóa tất cả</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform">
                <ChevronDown size={14} />
              </div>
            </div>
            <button className="cursor-pointer rounded bg-blue-500 px-3 py-1 text-sm text-white">
              Áp dụng
            </button>
          </div>
          <button className="flex cursor-pointer items-center gap-1 rounded border border-green-500 px-3 py-1 text-sm text-green-500">
            <Plus size={16} />
            Thêm mới
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="w-10 px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  STT
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Hình ảnh
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Tiêu đề
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Giá
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Vị trí
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Trạng thái
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Tạo bởi
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {product.id}
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {product.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {product.price}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <input
                      type="text"
                      value={product.position}
                      className="w-12 rounded border px-2 py-1 text-center"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <div>{product.createdBy}</div>
                    <div className="text-xs text-gray-500">
                      {product.createdAt}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <div className="flex gap-1">
                      <button className="rounded bg-gray-600 px-2 py-1 text-xs text-white">
                        Chi tiết
                      </button>
                      <button className="rounded bg-yellow-500 px-2 py-1 text-xs text-white">
                        Sửa
                      </button>
                      <button className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <div className="text-sm text-gray-700">Trang</div>
          <div className="flex gap-1">
            <button className="rounded border bg-blue-500 px-3 py-1 text-white">
              1
            </button>
            <button className="rounded border px-3 py-1 hover:bg-gray-100">
              2
            </button>
            <button className="rounded border px-3 py-1 hover:bg-gray-100">
              »
            </button>
            <button className="rounded border px-3 py-1 hover:bg-gray-100">
              Cuối
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
