import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './contact-form.module.css';

class ContactForm extends Component {
  contactId = nanoid();

  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    // this.reset();
    this.setState({
      name: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contactId, handleSubmit, handleChange } = this;
    const { name } = this.state;

    return (
      <form onSubmit={handleSubmit} className={styles.formPlace}>
        <div>
          <label htmlFor={contactId}>Name</label>
          <input
            value={name}
            onChange={handleChange}
            id={contactId}
            className={styles.inputPlace}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
