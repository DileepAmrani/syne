import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

 export const getContacts = async () => {
    return await auth.get('/availablecontacts', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
