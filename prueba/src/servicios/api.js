// src/servicios/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const iniciarSesion = async (nombre, password) => {
  try {
    const response = await axios.post(`${API_URL}/inicioSesion`, { nombre, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const obtenerPresos = async () => {
  try {
    const response = await axios.get(`${API_URL}/presos`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const obtenerPolicias = async () => {
  try {
    const response = await axios.get(`${API_URL}/policias`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const agregarPreso = async (preso) => {
  try {
    const response = await axios.post(`${API_URL}/presos`, preso);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const actualizarPreso = async (id, preso) => {
  try {
    const response = await axios.put(`${API_URL}/presos/${id}`, preso);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const eliminarPreso = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/presos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
