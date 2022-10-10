import PropTypes from "prop-types";
import TextInput from "components/TextInput/TextInput";
import Button from "components/Button/Button";

function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Add todo" />
      <Button txt="Add" type="submit" />
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
