import PropTypes from "prop-types";
import "./Button.css";

function Button({ onClick = () => {}, children }) {
  const onInnerClick = (event) => {
    onClick(event);
  };
  return (
    <button onClick={onInnerClick} className="CommonButton New_Content">
      {children}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
