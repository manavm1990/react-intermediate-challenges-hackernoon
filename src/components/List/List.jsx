import PropTypes from "prop-types";
import Item from "./Item/Item";

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} txt={item.title} />
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default List;
