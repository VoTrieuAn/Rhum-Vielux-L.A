import { useMemo, useState } from "react";
import { ShoppingCart, Minus, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  addProductAction,
  deleteProductAction,
  minusProductAction,
} from "@reducer/actions/cartAction";
import { useProductContext } from "@context/ProductProvider";
import { dialogWithButton } from "@libs/sweet-alert";

const CartPage = () => {
  const { cartState, cartDispatch } = useProductContext();

  const totalDeal = useMemo(
    () =>
      cartState.items.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0),
    [JSON.stringify(cartState.items)],
  );

  const handleClickButtonAdd = (item) => {
    cartDispatch(addProductAction(item));
  };

  const handleClickButtonMinus = (id) => {
    cartDispatch(minusProductAction(id));
  };

  const handleClickButtonDelete = (id) => {
    dialogWithButton(
      "Bạn có chắc chắn muốn xóa khỏi giỏ hàng?",
      () => {
        cartDispatch(deleteProductAction(id));
      },
      "Xác nhận",
    );
  };

  const handleClickButtonDeleteAll = () => {
    dialogWithButton(
      "Xác nhận thanh toán?",
      () => {
        cartDispatch({ type: "cart/deleteAll" });
      },
      "Xác nhận",
    );
  };
  return (
    <section className="p-normal relative">
      <div className="container">
        <h1 className="text-primary mb-8 text-2xl font-bold">
          Giỏ hàng của bạn
        </h1>

        {cartState.items.length === 0 ? (
          <div className="py-12 text-center">
            <ShoppingCart className="mx-auto mb-4 h-16 w-16 text-gray-400" />
            <p className="text-xl text-gray-500">Giỏ hàng của bạn đang trống</p>
            <Link
              to="/products"
              className="mt-4 inline-flex cursor-pointer rounded-md bg-red-600 px-6 py-2 text-white hover:bg-red-700"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="lg:w-2/3">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Sản phẩm
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Giá
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Số lượng
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">
                        Tổng
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium tracking-wider text-gray-500 uppercase"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {cartState.items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <div className="relative h-full w-full">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  width={80}
                                  height={80}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                Xuất xứ: {item.origin}
                              </div>
                              <div className="text-sm text-gray-500">
                                Dung tích: {item.volume}
                              </div>
                              <div className="text-sm text-gray-500">
                                Nồng độ: {item.alcoholContent}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-center text-sm text-gray-900">
                            {item.price.toLocaleString()}đ
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <div className="inline-flex shrink items-center overflow-hidden rounded-[4px] border border-gray-300">
                            <button
                              onClick={() => handleClickButtonMinus(item.id)}
                              className="cursor-pointer px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-12 cursor-default border-x border-gray-300 text-center focus:outline-none"
                            />
                            <button
                              className="cursor-pointer px-2 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => handleClickButtonAdd(item)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            {item.inStock} sản phẩm có sẵn
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-center text-sm font-medium text-gray-900">
                            {(item.price * item.quantity).toLocaleString()}đ
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                          <button
                            onClick={() => handleClickButtonDelete(item.id)}
                            className="cursor-pointer text-red-600 hover:text-red-900"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="mb-4 text-lg font-medium text-gray-900">
                  Tóm tắt đơn hàng
                </h2>
                <div className="border-t border-gray-200 py-4">
                  <div className="mb-2 flex justify-between">
                    <p className="text-sm text-gray-600">Tạm tính</p>
                    <p className="text-sm font-medium text-gray-900">
                      {totalDeal.toLocaleString()}đ
                    </p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p className="text-sm text-gray-600">Phí vận chuyển</p>
                    <p className="text-sm font-medium text-gray-900">0đ</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-4 flex justify-between">
                    <p className="text-base font-medium text-gray-900">
                      Tổng cộng
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {totalDeal.toLocaleString()}đ
                    </p>
                  </div>
                  <button
                    className="flex w-full cursor-pointer items-center justify-center rounded-md bg-red-600 px-4 py-3 text-white hover:bg-red-700"
                    onClick={handleClickButtonDeleteAll}
                  >
                    Thanh toán
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <Link
                    to="/products"
                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-300 px-4 py-3 text-center text-gray-700 hover:bg-gray-50"
                  >
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default CartPage;
