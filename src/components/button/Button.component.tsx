import { BUTTON_TYPES } from "../../common/layout/ButtonTypes";

type butttonProps = {
  children: React.ReactNode;
  buttonType: string;
  onClick?: () => void;
  disabled?: boolean;
};

const ButtonComponent = ({ children, buttonType, ...rest }: butttonProps) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
