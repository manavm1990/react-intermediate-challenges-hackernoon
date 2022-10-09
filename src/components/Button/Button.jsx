import PropTypes from "prop-types";

function Button({ txt, type, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="rounded bg-blue-500 px-4 py-2 text-white"
      type={type}
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
