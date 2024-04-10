interface LineDividerProps {
  className?: string; // for enhancement if there are additional classes
}
const LineDivider = ({ className }: LineDividerProps) => {
  return (
    <hr
      className={`border-t-2 border-gray-200 w-[90%] 2xl:w-[50rem] mx-auto ${
        className && className
      }`}
    />
  );
};

export default LineDivider;
