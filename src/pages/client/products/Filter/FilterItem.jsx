const FilterItem = ({ filter }) => {
  return (
    <>
      <div className="">
        <div className="text-primary mb-2.5 text-[16px] font-bold lg:text-[18px]">
          {filter.title}
        </div>
        <div className="flex flex-col gap-2">
          {filter.valueFilter.map((item) => (
            <div key={item.id} className="text-[14px] lg:text-[16px]">
              <input
                type="checkbox"
                id={item.id}
                className="accent-secondary"
              />
              <label
                className="ml-2.5 font-medium text-[#00171F]"
                htmlFor={item.id}
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default FilterItem;
