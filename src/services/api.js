import axios from 'axios';
const BASE_URL = 'https://64de367e825d19d9bfb24c93.mockapi.io/api';

// Get contacts
export const fetchContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`, {
    headers: { 'content-type': 'application/json' },
  });
  return data;
};

// Add contact
export const addContact = async newContact => {
  const { data } = await axios.post(
    `${BASE_URL}/contacts`,
    {
      name: newContact.name,
      number: newContact.number,
    },
    {
      headers: { 'content-type': 'application/json' },
    }
  );
  return data;
};

// Delete contact
export const deleteContact = async contactId => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  return data;
};
