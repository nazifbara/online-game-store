import './Button.css';

function Button({ type = 'default', handleClick, children, ...other }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`Button ${type}`}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
