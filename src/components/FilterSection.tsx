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
          className="cursor-pointer"
          onClick={() => setFilteredType(filterType)}
        >
          {filterType} only
        </div>
      ))}
      <button
        className="bg-custom-blue px-[4rem] py-[1rem] text-white rounded-lg"
        onClick={() => setFilteredType("")}
      >
        Get Books
      </button>
    </>
  );
};

export default FilterSection;
