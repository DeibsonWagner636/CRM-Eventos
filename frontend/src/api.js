import axios from "axios";

// Troque a URL abaixo pelo endereço da sua API FastAPI quando for publicar
const API_URL = "http://localhost:8000";

export const getContatos = () =>
  axios.get(`${API_URL}/contatos`).then(res => res.data);

export const createContato = (data) =>
  axios.post(`${API_URL}/contatos`, data).then(res => res.data);

export const updateContato = (id, data) =>
  axios.put(`${API_URL}/contatos/${id}`, data).then(res => res.data);

export const deleteContato = (id) =>
  axios.delete(`${API_URL}/contatos/${id}`).then(res => res.data);