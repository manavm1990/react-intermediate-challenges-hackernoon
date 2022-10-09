import Button from "components/Button/Button";
import PropTypes from "prop-types";
import Item from "./Item/Item";

function List({ items, handleDelete }) {
  const renderBtn = (id) => (
    <Button txt="Delete" handleClick={() => handleDelete(id)} />
  );

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          txt={item.title}
          renderContent={() => renderBtn(item.id)}
        />
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
  handleDelete: PropTypes.func,
};

List.defaultProps = {
  handleDelete: () => {},
};

export default List;
