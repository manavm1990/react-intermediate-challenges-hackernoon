import Button from "components/Button/Button";
import TextInput from "components/TextInput/TextInput";
import PropTypes from "prop-types";

function AddTodo({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Add todo" id="add" />
      <Button txt="Add" type="submit" />
    </form>
  );
}

AddTodo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
