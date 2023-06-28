import HeaderDown from "./HeaderDown";
import HeaderTop from "./HeaderTop";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <HeaderTop />
        <HeaderDown />
      </div>
    </header>
  );
};

export default HeaderComponent;
