import { PREFIX_ADMIN } from "@config/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const State = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const goToAll = () => {
    navigate(`/${PREFIX_ADMIN}/products`);
  };

  const goToActive = () => {
    navigate(`/${PREFIX_ADMIN}/products?status=active`);
  };

  const goToInactive = () => {
    navigate(`/${PREFIX_ADMIN}/products?status=inactive`);
  };

  return (
    <div className="mb-4 flex gap-2">
      <button
        className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "all" ? "bg-green-500 text-white" : "border bg-white"}`}
        onClick={() => {
          setActiveTab("all");
          goToAll();
        }}
      >
        Tất cả
      </button>
      <button
        className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "active" ? "bg-green-500 text-white" : "border bg-white"}`}
        onClick={() => {
          setActiveTab("active");
          goToActive();
        }}
      >
        Hoạt động
      </button>
      <button
        className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "inactive" ? "bg-green-500 text-white" : "border bg-white"}`}
        onClick={() => {
          setActiveTab("inactive");
          goToInactive();
        }}
      >
        Dừng hoạt động
      </button>
    </div>
  );
};
export default State;
