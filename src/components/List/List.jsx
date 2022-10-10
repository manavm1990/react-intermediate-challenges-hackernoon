import Button from "components/Button/Button";
import PropTypes from "prop-types";
import Item from "./Item/Item";

function List({ items, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} id={item.id} txt={item.title}>
          <Button txt="Delete" handleClick={() => handleDelete(item.id)} />
        </Item>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func,
};

List.defaultProps = {
  handleDelete: () => {},
};

export default List;
