import PropTypes from "prop-types";
import Item from "./Item/Item";

function List({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <Item key={i} txt={item} />
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
