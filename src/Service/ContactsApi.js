import axios from 'axios';

axios.defaults.baseURL = 'https://65b0210d2f26c3f2139c8b02.mockapi.io';

export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const createContactApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContactApi = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
