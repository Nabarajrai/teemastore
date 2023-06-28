import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import SearchInput from "../searchInput/SearchInput";
import logo from "../../assets/images/Logo-retina.png";

const HeaderTop = () => {
  return (
    <div className="headertop-container">
      <div className="navlist">
        <div className="navlist__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navlist__search">
          <SearchInput type="text" />
        </div>
        <div className="navlist__icons">
          <span className="navlist__icons--people">
            <AiOutlineUser />
          </span>
          <span className="navlist__icons--shop">
            <AiOutlineShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
