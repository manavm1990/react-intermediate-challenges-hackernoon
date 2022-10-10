import PropTypes from "prop-types";

function Item({ id, txt, children }) {
  return (
    <li id={id}>
      {txt}
      {children}
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  txt: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ])
};

Item.defaultProps = {
  children: null,
};

export default Item;
