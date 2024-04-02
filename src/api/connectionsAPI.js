import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContactsApi = async ({ token }) => {
  const { data } = await axios.get(`/contacts`, {
    params: {
      auth: token,
    },
  });
  return data;
};

export const addContactApi = async (contact) => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContactApi = async id => {
  await axios.delete(`/contacts/${id}`);

  return id;
};
