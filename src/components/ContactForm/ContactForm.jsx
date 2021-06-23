import { useState } from 'react'
import styles from './ContactForm.module.css'

import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/phonebook/operations";
import selectors from "../../redux/phonebook/selectors";

export default function ContactForm() {

  const [contact, setContact]=useState({name:'',     number:''})
  const contacts = useSelector(selectors.getContactsList);
  const dispatch = useDispatch();

 const handleChange = (e) => {
  
    const { name, value } = e.currentTarget;
    setContact((prev) => ({...prev, [name]:value}));
 };
 
  const handleSubmit = (e) => {
   e.preventDefault();
 
 if (contacts.find((el) => el.contact === contact)) {
   alert("already add");
      reset();
      return;
    }
    dispatch(operations.addContact(contact ));
    reset();
  };

  const reset = () => setContact({ name: '', number: '' });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          value={contact.name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          value={contact.number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}