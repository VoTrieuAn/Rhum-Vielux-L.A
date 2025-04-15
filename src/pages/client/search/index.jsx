import Seo from "@components/Seo";
import SearchTitle from "./SearchTitle";
import SearchHeader from "./SearchHeader";
import SearchProductList from "./SearchProductList";
import Pagination from "@components/Pagination";

const SearchPage = () => {
  return (
    <>
      <Seo title="Tìm kiếm" />
      <SearchHeader />
      <SearchTitle />
      <SearchProductList />
    </>
  );
};
export default SearchPage;
