import React, { useState, useEffect } from 'react';
import { obtenerPresos, agregarPreso, actualizarPreso, eliminarPreso } from '../servicios/api';
import ListaPresos from '../componentes/ListaPresos';

const PaginaPresos = () => {
  const [presos, setPresos] = useState([]);
  const [nuevoPreso, setNuevoPreso] = useState({
    nombre: '',
    edad: '',
    unidad: '',
    horario: '',
    oficial: '',
    destino: ''
  });

  useEffect(() => {
    const fetchPresos = async () => {
      const data = await obtenerPresos();
      setPresos(data);
    };
    fetchPresos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoPreso((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const presoAgregado = await agregarPreso(nuevoPreso);
    setPresos((prev) => [...prev, presoAgregado]);
    setNuevoPreso({
      nombre: '',
      edad: '',
      unidad: '',
      horario: '',
      oficial: '',
      destino: ''
    });
  };

  const handleActualizarPreso = async (id, actualizado) => {
    const presoActualizado = await actualizarPreso(id, actualizado);
    setPresos((prev) =>
      prev.map((preso) => (preso._id === id ? presoActualizado : preso))
    );
  };

  const handleEliminarPreso = async (id) => {
    await eliminarPreso(id);
    setPresos((prev) => prev.filter((preso) => preso._id !== id));
  };

  return (
    <div>
      <h2>Gestión de Presos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoPreso.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="edad"
          placeholder="Edad"
          value={nuevoPreso.edad}
          onChange={handleChange}
        />
        <input
          type="text"
          name="unidad"
          placeholder="Unidad"
          value={nuevoPreso.unidad}
          onChange={handleChange}
        />
        <input
          type="text"
          name="horario"
          placeholder="Horario"
          value={nuevoPreso.horario}
          onChange={handleChange}
        />
        <input
          type="text"
          name="oficial"
          placeholder="Oficial"
          value={nuevoPreso.oficial}
          onChange={handleChange}
        />
        <input
          type="text"
          name="destino"
          placeholder="Destino"
          value={nuevoPreso.destino}
          onChange={handleChange}
        />
        <button type="submit">Agregar Preso</button>
      </form>
      <ListaPresos
        presos={presos}
        actualizarPreso={handleActualizarPreso}
        eliminarPreso={handleEliminarPreso}
      />
    </div>
  );
};

export default PaginaPresos;
