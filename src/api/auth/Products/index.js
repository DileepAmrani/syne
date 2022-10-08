import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

 export const getProducts = async () => {
    return await auth.get('/availableproducts', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
