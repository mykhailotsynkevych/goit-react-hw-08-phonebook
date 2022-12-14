import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContactsApi = async () => {
  const response = await axios.get(
    '/contacts'
  );
  return response.data;
};

export const addContactApi = async ({ name, number }) => {
  const contact = {name, number};

  const response = await axios.post('/contacts', contact);
  return response.data;
};


export const deleteContactApi = async id  => {
  await axios.delete(`/contacts/${id}`);

  return id;
};