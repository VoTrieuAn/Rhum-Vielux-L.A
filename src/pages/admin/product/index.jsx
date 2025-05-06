import Action from "@components/Actions";
import ButtonStatus from "@components/Actions/ButtonStatus";
import SelectAction from "@components/Actions/SelectAction";
import Filters from "@components/Filters";
import { PREFIX_ADMIN } from "@config/system";
import { useProductContext } from "@context/ProductProvider";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const { products } = useProductContext();
  const [searchParams] = useSearchParams();
  const [productFilter, setProductFilter] = useState(products);
  const [checkedIds, setCheckedIds] = useState([]);
  const status = searchParams.get("status") || "";
  const keyword = searchParams.get("keyword") || "";

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

    if (keyword) {
      setProductFilter((prev) =>
        prev.filter((product) => product.slug.includes(keyword)),
      );
    }
  }, [status, keyword, products]);

  const toggleCheck = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleCheckAll = (checked) => {
    if (checked) {
      setCheckedIds(productFilter.map((product) => product.id)); // hoặc mảng id động từ API
    } else {
      setCheckedIds([]);
    }
  };

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
            <SelectAction ids={checkedIds} setIds={setCheckedIds} />
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
                  <input
                    type="checkbox"
                    id="checkAll"
                    className="rounded"
                    checked={checkedIds.length === productFilter.length}
                    onChange={(e) => handleCheckAll(e.target.checked)}
                  />
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
                  Số lượng
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Vị trí
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Trạng thái
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {productFilter.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={checkedIds.includes(product.id)}
                      onChange={() => toggleCheck(product.id)}
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {index + 1}
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
                    {product.stock > 0 ? product.stock : "Hết hàng"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <input
                      type="text"
                      defaultValue={product.position}
                      className="w-12 rounded border px-2 py-1 text-center"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <ButtonStatus id={product.id} status={product.status} />
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-900">
                    <Action id={product.id} />
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
