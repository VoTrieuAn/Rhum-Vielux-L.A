import Filters from "@components/Filters";
import { PREFIX_ADMIN } from "@config/system";
import { useProductContext } from "@context/ProductProvider";
import { ChevronDown, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const { products } = useProductContext();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const [productFilter, setProductFilter] = useState(products);

  useEffect(() => {
    if (status) {
      setProductFilter(
        products.filter(
          (product) => product.status === status && product.deleted === false,
        ),
      );
    } else {
      setProductFilter(products.filter((product) => product.deleted === false));
    }
  }, [status, products]);

  return (
    <>
      {/* Main Content */}
      <h1 className="mb-4 text-3xl font-bold">Danh sách sản phẩm</h1>
      {/* Filters */}
      <Filters />

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
          <Link
            to={`/${PREFIX_ADMIN}/products/create`}
            className="transition-colors-300 flex cursor-pointer items-center gap-1 rounded border border-green-500 px-3 py-1 text-sm text-green-500 hover:bg-green-500 hover:text-white"
          >
            <Plus size={16} />
            Thêm mới
          </Link>
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
              {productFilter.map((product) => (
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
                      alt={product.name}
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {product.name}
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
                    <span
                      className={`rounded-full ${product.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} px-2 py-1 text-xs`}
                    >
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
