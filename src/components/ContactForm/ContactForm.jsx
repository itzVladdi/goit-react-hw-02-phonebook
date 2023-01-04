import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleAddContact = event => {
    event.preventDefault();
    this.props.handleSubmit({ ...this.state, id: nanoid() });
    this.setState({ name: '', number: '' });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleAddContact}>
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <label htmlFor="Number">Number</label>
        <input
          id="Number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
