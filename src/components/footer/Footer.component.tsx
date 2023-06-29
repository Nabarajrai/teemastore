import { BiLogoFacebook } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { MdLocalAtm } from "react-icons/md";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <div className="custom-care">
            <div className="custom-care__title">Customer Care</div>
            <div className="custom-care__list">
              <ul>
                <li>FAQs</li>
                <li>Accessibility Statement</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>
          <div className="help">
            <div className="help__title">Help & Support</div>
            <div className="help__list">
              <ul>
                <li>FAQs</li>
                <li>Accessibility Statement</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>
          <div className="company">
            <div className="company__title">Company info</div>
            <div className="company__list">
              <ul>
                <li>FAQs</li>
                <li>Accessibility Statement</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>
          <div className="social-media">
            <div className="social-media__title">Company info</div>
            <div className="social-media__list">
              <span className="social-media__list--icons">
                <BiLogoFacebook />
              </span>
              <span className="social-media__list--icons">
                <FaPinterestP />
              </span>
              <span className="social-media__list--icons">
                <BsInstagram />
              </span>
              <span className="social-media__list--icons">
                <AiOutlineTwitter />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-content-down">
          <div className="footer-content-down__title">
            Copyright © 2023 Vinovathemes. All rights reserved.
          </div>
          <div className="footer-content-down__imgelist">
            <span className="footer-content-down__imgelist--icons">
              <FaAmazonPay />
            </span>
            <span className="footer-content-down__imgelist--icons">
              <LiaCcVisa />
            </span>
            <span className="footer-content-down__imgelist--icons">
              <FaAmazonPay />
            </span>
            <span className="footer-content-down__imgelist--icons">
              <MdLocalAtm />
            </span>
            <span className="footer-content-down__imgelist--icons">
              <FaAmazonPay />
            </span>
            <span className="footer-content-down__imgelist--icons">
              <FaAmazonPay />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
