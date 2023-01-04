import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export function ContactItem({ filterContacts, deleteUser }) {
  return (
    <>
      {filterContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => deleteUser(id)}>Delete</button>
        </li>
      ))}
    </>
  );
}

ContactItem.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
