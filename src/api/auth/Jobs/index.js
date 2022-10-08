import axios from "axios";

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

 export const getJobs = async () => {
    return await auth.get('/jobs?search=&date=&status_draft=Draft&status_sent=Sent&status_accepted=Accepted&status_decline=Decline&status_aged=Aged', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

