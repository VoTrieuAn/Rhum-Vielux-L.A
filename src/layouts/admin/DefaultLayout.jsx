const DefaultLayout = ({ children }) => {
  return (
    <>
      <h1>Default Layout</h1>
      <div className="content">{children}</div>
      <footer>
        <p>Footer content goes here</p>
      </footer>
    </>
  );
};
export default DefaultLayout;
