type FilterSectionProps = {
  setFilteredType: (type: string) => void;
  filterSet: string[];
};

const FilterSection: React.FC<FilterSectionProps> = ({
  setFilteredType,
  filterSet,
}) => {
  return (
    <>
      {filterSet.map((filterType) => (
        <div
          key={filterType}
          className="order-1 sm:order-0 text-xl cursor-pointer underline text-custom-blue hover:text-blue-900 font-bold"
          onClick={() => setFilteredType(filterType)}
        >
          {filterType} only
        </div>
      ))}
      <button
        className="order-0 sm:order-1 text-xl bg-custom-blue px-[4rem] py-[1rem] text-white rounded-lg"
        onClick={() => setFilteredType("")}
      >
        Get Books
      </button>
    </>
  );
};

export default FilterSection;
