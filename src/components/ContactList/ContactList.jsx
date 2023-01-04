import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export function ContactList({ filterContacts, deleteUser }) {
  return (
    <ul className={css.list}>
      <ContactItem filterContacts={filterContacts} deleteUser={deleteUser} />
    </ul>
  );
}
