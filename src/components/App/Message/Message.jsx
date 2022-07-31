import PropTypes from 'prop-types';
import s from './Message.module.css';

const Message = ({ text }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>{text}</p>
    </div>
  );
};

Message.prototype = {
  text: PropTypes.string.isRequired,
};

export default Message;
