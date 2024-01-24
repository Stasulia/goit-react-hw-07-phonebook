import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorItems } from 'store/selectors';
import { addContactThunk } from 'store/thunks';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectorItems);
  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    contacts?.find(
      contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
    )
      ? alert(`${name} is already in the phonebook`)
      : dispatch(addContactThunk({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.contactForm}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              required
            />
            <button type="submit">Add Contacts</button>
          </label>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
