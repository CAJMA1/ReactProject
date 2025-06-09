import { useNavigate } from "react-router-dom";

const SimpleButton = ({text, onClick,redirectTo, className=''}) =>{
    const navigate = useNavigate();
    const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (redirectTo) {
      navigate(redirectTo);
    }
  };
    return(
        <button className={className} type="button" onClick={handleClick}>{text}</button>
    )
};

export default SimpleButton;