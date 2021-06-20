import './button.css';

function Button({ type = 'default', children, ...other }) {
  return (
    <button className={`Button ${type}`} {...other}>
      {children}
    </button>
  );
}

export default Button;
