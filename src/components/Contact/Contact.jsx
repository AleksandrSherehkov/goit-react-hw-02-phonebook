import PropTypes from 'prop-types';
import { FcCancel, FcCellPhone } from 'react-icons/fc';
import s from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact, contactId }) => {
  return (
    <>
      <div className={s.wrapper}>
        <span className={s.icon}>
          <FcCellPhone size="35" />
        </span>
        <p className={s.name}>{name}</p>
      </div>
      <div className={s.wrapper}>
        <p className={s.number}>{number}</p>
        <button className={s.button} type="button" onClick={() => onDeleteContact(contactId)}>
          <FcCancel size="30" />
        </button>
      </div>
    </>
  );
};

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
