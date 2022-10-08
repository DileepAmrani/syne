import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

export function login(email, password) {
  return auth.post('/login', {
    email,
    password,
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}