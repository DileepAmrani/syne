import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

 export const getCompanies = async () => {
    return await auth.get('/availablecompanies', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
