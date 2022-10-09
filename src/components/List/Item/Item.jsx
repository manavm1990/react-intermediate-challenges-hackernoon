import PropTypes from "prop-types";

function Item({ id, txt, renderContent }) {
  return (
    <li id={id}>
      {txt}
      {renderContent && renderContent()}
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  txt: PropTypes.string.isRequired,
  renderContent: PropTypes.func,
};

Item.defaultProps = {
  renderContent: null,
};

export default Item;
