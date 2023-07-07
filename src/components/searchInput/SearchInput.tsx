import { AiOutlineSearch } from "react-icons/ai";
import Typical from "react-typical";
type SearchInputProps = {
  type: string;
};

const SearchInput = ({ type, ...rest }: SearchInputProps) => {
  return (
    <div className="searchInput">
      <div className="searchInput-box">
        <div className="searchInput-box__search">
          <AiOutlineSearch />
        </div>
        <input type={type} className="searchInput-box__input" {...rest} />
        <div className="searchInput-box__label">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["What are you looking for ?", 1000, "", 1000]}
          />
        </div>
        <div className="searchInput-box__icons">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
