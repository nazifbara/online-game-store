import './button.css';

function Button({ type = 'default', handleClick, children, ...other }) {
  return (
    <button onClick={handleClick} className={`Button ${type}`} {...other}>
      {children}
    </button>
  );
}

export default Button;
