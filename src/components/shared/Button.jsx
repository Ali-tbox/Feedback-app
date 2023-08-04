import PropTypes from "prop-types";

function Button({ version, type, isDisable, children, onClick }) {
  return (
    <>
      <button type={type} disabled={isDisable} className={`btn btn-${version}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
Button.defaultProps = {
  version: "primary",
  
  type: "button",
  isDisabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisable: PropTypes.bool,
};

export default Button;
