import Seo from "@components/Seo";
import ProductList from "./ProductList";

const SearchPage = () => {
  return (
    <>
      <Seo title="Tìm kiếm" />
      <div className="container mx-auto">
        <div className="pl-1 text-[#667479] gap-3.5 flex">
          <div>
            trang chủ
          </div>
          <div>
            {'>'} 
          </div>
          <div>
            tìm kiếm
          </div>
        </div>
        <div className="text-center px-5">
          <h1 className="text-5xl p-2 text-[#3a1a15]"><strong>KẾT QUẢ TÌM</strong></h1>
          <hr className="w-[579px] items-center m-auto text-[#AF6900]"/>
          <h1 className="text-[#3a1a15] p-2">Rượu Rhum Long An – Giọt ngọc quê hương, đậm đà hồn Việt.</h1>
        </div>
        <div>
          <ProductList></ProductList>
        </div>
        <div className="flex justify-center pt-5 pb-[60px] text-[#3A1A15]">
          <a href="#" className="float-left no-underline px-4 py-2;">&larr;</a>
          <a href="#" className="float-left no-underline px-4 py-2;">1</a>
          <a href="#" className="float-left no-underline px-4 py-2;">2</a>
          <a href="#" className="float-left no-underline px-4 py-2;">3</a>
          <a href="#" className="float-left no-underline px-4 py-2;">4</a>
          <a href="#" className="float-left no-underline px-4 py-2;">5</a>
          <a href="#" className="float-left no-underline px-4 py-2;">6</a>
          <a href="#" className="float-left no-underline px-4 py-2;">&rarr;</a>
        </div>
      </div>
      
    </>
  );
};
export default SearchPage;
