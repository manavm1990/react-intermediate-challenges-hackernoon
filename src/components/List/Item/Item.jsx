import PropTypes from "prop-types";

function Item({ txt, renderContent }) {
  return (
    <li>
      {txt}
      {renderContent && renderContent()}
    </li>
  );
}

Item.propTypes = {
  txt: PropTypes.string.isRequired,
  renderContent: PropTypes.func,
};

Item.defaultProps = {
  renderContent: null,
};

export default Item;
