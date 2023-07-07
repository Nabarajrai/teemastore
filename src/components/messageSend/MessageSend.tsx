import { AiTwotoneMail } from "react-icons/ai";
type SearchInputProps = {
  type: string;
  placeholder: string;
};

const MessageSend = ({ type, ...rest }: SearchInputProps) => {
  return (
    <div className="messageInput">
      <div className="messageInput-box">
        <div className="messageInput-box__search">
          <AiTwotoneMail />
        </div>
        <input type={type} className="messageInput-box__input" {...rest} />
        {/* <div className="messageInput-box__label">Enter your email</div> */}
        <div className="messageInput-box__icons">
          <button className="messageInput-box__icons--btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default MessageSend;
