import { Link } from "react-router-dom";

const HeaderDown = () => {
  return (
    <div className="navlist-down">
      <div className="navlink">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Collection</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">Other pages</Link>
          </li>
          <li>
            <Link to="/">BLOG</Link>
          </li>
          <li>
            <Link to="/">FAQS</Link>
          </li>
          <li>
            <Link to="/">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDown;
