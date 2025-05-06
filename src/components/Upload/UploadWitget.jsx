import { useEffect, useRef } from "react";
import { FaUpload } from "react-icons/fa";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhjvetldo",
        uploadPreset: "vdslnnhe",
      },
      (error, result) => {
        console.log(result);
      },
    );
  }, []);
  return (
    <>
      <div
        className="transition-colors-300 flex w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-[#0078FF] px-3 py-2 text-[16px] text-[#0078FF] hover:bg-[#0078FF] hover:text-white"
        onClick={() => widgetRef.current.open()}
      >
        <FaUpload /> Tải ảnh lên
      </div>
    </>
  );
};
export default UploadWidget;
