import axios from "axios";

const token = localStorage.getItem('token')
console.log('Token', token);

export const api = axios.create({
  baseURL: "http://todo.paydali.uz/api",
  headers: {
    Authorization: `Bearer ${token && token}`
  }
});