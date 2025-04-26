import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Header />
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </>
  );
};
export default DefaultLayout;
