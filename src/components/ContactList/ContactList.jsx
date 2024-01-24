import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selector } from 'store/selectors';
import { deleteContactThunk, getContactsThunk } from 'store/thunks';

const ContactList = () => {
  const selectorContacts = useSelector(selector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const newContact = selectorContacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.contactItem}>
        <p className={css.contactText}>
          {name} : {number}
        </p>
        <button
          className={css.contactBtn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return <ul className={css.contactList}>{newContact}</ul>;
};

export default ContactList;
