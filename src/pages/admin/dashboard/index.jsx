import { useProductContext } from "@context/ProductProvider";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(0);
  const [inactive, setInactive] = useState(0);
  const [deleted, setDeleted] = useState(0);
  const { products } = useProductContext();

  useEffect(() => {
    const totalProducts = products.length;
    const activeProducts = products.filter(
      (product) => product.status === "active",
    ).length;
    const inactiveProducts = products.filter(
      (product) => product.status === "inactive",
    ).length;
    const deletedProducts = products.filter(
      (product) => product.deleted === true,
    ).length;
    setTotal(totalProducts);
    setActive(activeProducts);
    setInactive(inactiveProducts);
    setDeleted(deletedProducts);
  }, [products]);

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Tổng quan</h1>
      <h2 className="mb-3 text-2xl font-bold text-red-400">
        Được thực hiện bởi:
      </h2>
      <ol className="text-xl">
        <li className="mb-3">1. Võ Triều An - 22657391</li>
        <li className="mb-3">2. Tô Phan Gia Bảo</li>
      </ol>
      <div className="w-full">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-xl font-medium text-gray-800">Sản phẩm</h2>
          </div>

          <div className="space-y-4 p-4">
            <div className="flex items-center">
              <p className="text-lg text-gray-700">
                Số lượng:{" "}
                <span className="font-bold text-gray-900">{total}</span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-lg text-gray-700">
                Hoạt động:{" "}
                <span className="font-bold text-gray-900">{active}</span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-lg text-gray-700">
                Dừng hoạt động:{" "}
                <span className="font-bold text-gray-900">{inactive}</span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-lg text-gray-700">
                Đã xóa:{" "}
                <span className="font-bold text-gray-900">{deleted}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
