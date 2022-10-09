import PropTypes from "prop-types";

function Item({ txt }) {
  return <li>{txt}</li>;
}

Item.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Item;
