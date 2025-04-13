const BannerTitle = ({ title, className = "" }) => {
  return (
    <>
      <h1
        className={`text-primary leading-16 font-normal sm:mb-1 sm:leading-normal ${className}`}
      >
        {title}
      </h1>
    </>
  );
};
export default BannerTitle;
