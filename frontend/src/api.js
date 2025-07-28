import axios from "axios";

// A URL da API vem do .env
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/docs";

export const getContatos = () =>
  axios.get(`${API_URL}/contatos`).then(res => res.data);

export const createContato = (data) =>
  axios.post(`${API_URL}/contatos`, data).then(res => res.data);

export const updateContato = (id, data) =>
  axios.put(`${API_URL}/contatos/${id}`, data).then(res => res.data);

export const deleteContato = (id) =>
  axios.delete(`${API_URL}/contatos/${id}`).then(res => res.data);
