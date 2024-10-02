import { Search } from "lucide-react";

type SearchType = {
  placeholder?: string;
  className?: string;
};

const SearchBar = ({ placeholder = "", className }: SearchType) => {
  return (
    <div className={`${className} px-3 max-w-96 items-center flex rounded-[7px] border-[0.3px] border-secondary-transparent-border h-full w-full`}>
      <input
        autoComplete="off"
        type="text"
        placeholder={placeholder}
        className="md:block hidden gap-2 truncate text-[0.98rem] text-white w-full mt-1 bg-transparent outline-none"
      />
      <Search color="#d8d8d8" />
    </div>
  );
};

export default SearchBar;
