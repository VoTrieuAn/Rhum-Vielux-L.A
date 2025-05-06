import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const State = () => {
  const [activeTab, setActiveTab] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (activeTab) {
      newParams.set("status", activeTab);
    } else {
      newParams.delete("status");
    }
    setSearchParams(newParams);
  }, [activeTab, searchParams, setSearchParams]); // chạy lại khi activeTab đổi

  return (
    <div className="mb-4 flex gap-2">
      <button
        className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "" ? "bg-green-500 text-white" : "border bg-white"}`}
        onClick={() => {
          setActiveTab("");
        }}
      >
        Tất cả
      </button>
      <button
        className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "active" ? "bg-green-500 text-white" : "border bg-white"}`}
        onClick={() => {
          setActiveTab("active");
        }}
      >
        Hoạt động
      </button>
      <button
        className={`cursor-pointer rounded px-3 py-1 text-sm ${activeTab === "inactive" ? "bg-green-500 text-white" : "border bg-white"}`}
        onClick={() => {
          setActiveTab("inactive");
        }}
      >
        Dừng hoạt động
      </button>
    </div>
  );
};
export default State;
