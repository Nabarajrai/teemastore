import MessageSend from "../messageSend/MessageSend";
import email from "../../assets/images/email.png";

const SubscribeComponent = () => {
  return (
    <div className="wrapper">
      <div className="subscribe">
        <div className="subscribe__icon">
          <img src={email} alt="email" />
          {/* <AiOutlineMail /> */}
        </div>
        <div className="subscribe__des">
          <h3>SIGN UP FOR TEEMATE STYLE NEWS</h3>
          <p>
            Get 15% off your first purchaxse! Plus, be the first to know about
            sales, new product launches and exclusive offers!
          </p>
          <div className="subscribe__des--input">
            <MessageSend type="text" placeholder="Type message here !" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;
