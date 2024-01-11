import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import styles from './my-contacts.module.css';

class MyContacts extends Component {
  state = {
    contacts: [
      {
        id: nanoid(),
        name: 'Julia',
        number: '11-22-33',
      },
      {
        id: nanoid(),
        name: 'Vasil',
        number: '44-55-66',
      },
    ],
    filter: '',
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normalizedName || item.number === number;
    });

    return Boolean(dublicate);
  }

  addContact = data => {
    if (this.isDublicate(data)) {
      return alert(
        `Contact with ${data.name} and ${data.number} is already in the list`
      );
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };

      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
    console.log();
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedfilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedfilter);
    });

    return filteredContacts;
  }

  render() {
    // const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    const { addContact, deleteContact, changeFilter } = this;

    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={changeFilter} />
        <ContactList items={contacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default MyContacts;
