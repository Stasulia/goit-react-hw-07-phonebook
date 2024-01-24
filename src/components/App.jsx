import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 'auto',
          marginTop: '50px',
          marginRight: 'auto',
          padding: '40px 20px',
          width: '500px',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1 className="title"> Phone book</h1>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
