import './Message.css';

function Message({ type, children }) {
  return <span className={`Message ${type}`}>{children}</span>;
}

export default Message;
