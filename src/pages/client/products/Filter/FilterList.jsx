import { useProductContext } from "@context/ProductProvider";
import { useEffect, useState } from "react";

const FilterList = ({ setProductFilter }) => {
  // Trạng thái các bộ lọc
  const { products } = useProductContext();
  const [concentrationFilters, setConcentrationFilters] = useState([]);
  const [volumeFilters, setVolumeFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);
  const [productReset, setProductReset] = useState([]);

  useEffect(() => {
    setProductReset(
      products
        .filter(
          (product) => product.status === "active" && product.deleted === false,
        )
        .sort((a, b) => b.position - a.position),
    );
  }, [products]);
  // Xử lý logic lọc khi các bộ lọc thay đổi
  useEffect(() => {
    let result = [...productReset];
    // Lọc theo nồng độ
    if (concentrationFilters.length > 0) {
      result = result.filter((product) => {
        return concentrationFilters.some((filter) => {
          if (filter === "below30") return product.alcohol < 30;
          if (filter === "30to40")
            return product.alcohol >= 30 && product.alcohol <= 40;
          if (filter === "above40") return product.alcohol > 40;
          return false;
        });
      });
    }

    // Lọc theo dung tích
    if (volumeFilters.length > 0) {
      result = result.filter((product) => {
        return volumeFilters.some((filter) => {
          if (filter === "300ml") return product.volume === 300;
          if (filter === "500ml") return product.volume === 500;
          if (filter === "750ml") return product.volume === 750;
          return false;
        });
      });
    }

    // Lọc theo giá
    if (priceFilters.length > 0) {
      result = result.filter((product) => {
        return priceFilters.some((filter) => {
          if (filter === "below200k") return product.price < 200000;
          if (filter === "200kto500k")
            return product.price >= 200000 && product.price <= 500000;
          if (filter === "500kto1000k")
            return product.price > 500000 && product.price <= 1000000;
          return false;
        });
      });
    }

    setProductFilter(result);
  }, [
    concentrationFilters,
    volumeFilters,
    priceFilters,
    JSON.stringify(products),
  ]);

  // Xử lý thay đổi bộ lọc nồng độ
  const handleConcentrationChange = (value) => {
    setConcentrationFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  // Xử lý thay đổi bộ lọc dung tích
  const handleVolumeChange = (value) => {
    setVolumeFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  // Xử lý thay đổi bộ lọc giá
  const handlePriceChange = (value) => {
    setPriceFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="">
          <div className="text-primary mb-2.5 text-[16px] font-bold lg:text-[18px]">
            Nồng độ
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"below30"}
                className="accent-secondary"
                checked={concentrationFilters.includes("below30")}
                onChange={() => handleConcentrationChange("below30")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"below30"}
              >
                Dưới 30%
              </label>
            </div>
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"30to40"}
                className="accent-secondary"
                checked={concentrationFilters.includes("30to40")}
                onChange={() => handleConcentrationChange("30to40")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"30to40"}
              >
                Từ 30% - 40%
              </label>
            </div>
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"above40"}
                className="accent-secondary"
                checked={concentrationFilters.includes("above40")}
                onChange={() => handleConcentrationChange("above40")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"above40"}
              >
                Trên 40%
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-primary mb-2.5 text-[16px] font-bold lg:text-[18px]">
            Dung tích
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"300ml"}
                className="accent-secondary"
                checked={volumeFilters.includes("300ml")}
                onChange={() => handleVolumeChange("300ml")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"300ml"}
              >
                300 ml
              </label>
            </div>
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"500ml"}
                className="accent-secondary"
                checked={volumeFilters.includes("500ml")}
                onChange={() => handleVolumeChange("500ml")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"500ml"}
              >
                500 ml
              </label>
            </div>
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"750ml"}
                className="accent-secondary"
                checked={volumeFilters.includes("750ml")}
                onChange={() => handleVolumeChange("750ml")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"750ml"}
              >
                750 ml
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-primary mb-2.5 text-[16px] font-bold lg:text-[18px]">
            Giá
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"below200k"}
                className="accent-secondary"
                checked={priceFilters.includes("below200k")}
                onChange={() => handlePriceChange("below200k")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"below200k"}
              >
                Dưới 200.000đ
              </label>
            </div>
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"200kto500k"}
                className="accent-secondary"
                checked={priceFilters.includes("200kto500k")}
                onChange={() => handlePriceChange("200kto500k")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"200kto500k"}
              >
                200.000đ – 500.000đ
              </label>
            </div>
            <div className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={"500kto1000k"}
                className="accent-secondary"
                checked={priceFilters.includes("500kto1000k")}
                onChange={() => handlePriceChange("500kto1000k")}
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={"500kto1000k"}
              >
                500.000đ – 1.000.000đ
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterList;
