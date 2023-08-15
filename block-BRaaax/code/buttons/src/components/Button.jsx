import PropTypes from "prop-types";

const Button = ({ disabled, label, onClickHandler, size, type }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClickHandler}
      className={`${type ? type : "primary"} ${size ? size : "medium"}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

export default Button;
