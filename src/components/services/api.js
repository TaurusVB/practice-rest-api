import axios from 'axios';

axios.defaults.baseURL = 'https://647a0a4aa455e257fa643b50.mockapi.io';

export const addContact = async values => {
  try {
    const response = await axios.post('/contacts', values);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async id => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = async fields => {
  try {
    const response = await axios.put(`/contacts/${fields.id}`, fields);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
