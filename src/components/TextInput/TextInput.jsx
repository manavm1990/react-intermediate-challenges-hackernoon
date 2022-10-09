import PropTypes from "prop-types";

function TextInput({ label }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TextInput;
