import PropTypes from "prop-types";

function Button({ txt, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="rounded bg-blue-500 px-4 py-2 text-white"
      type="button"
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
