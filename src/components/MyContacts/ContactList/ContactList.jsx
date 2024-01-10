import styles from './contact-list.module.css';

const ContactList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name }) => (
    <li key={id}>
      Name: {name}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default ContactList;
