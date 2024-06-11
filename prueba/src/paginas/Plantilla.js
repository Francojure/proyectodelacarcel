// src/paginas/Plantilla.
import React, { useState, useEffect } from 'react';
import { obtenerPresos, agregarPreso, eliminarPreso, actualizarPreso, obtenerPolicias } from '../servicios/api';

const Plantilla = () => {
  const [presos, setPresos] = useState([]);
  const [guardias, setGuardias] = useState([]);
  const [vehiculos] = useState(["1", "2", "los Aguilares", "San Pedro", "Brigada capital"]);
  const [permisos] = useState(["MAÑANA", "TARDE", "NOCHE"]);
  const [tobilleras] = useState(["Sí", "No"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const presosResponse = await obtenerPresos();
        const guardiasResponse = await obtenerPolicias();
        setPresos(presosResponse);
        setGuardias(guardiasResponse);
      } catch (err) {
        console.error("Error al obtener los datos", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e, index, field) => {
    const newPresos = [...presos];
    newPresos[index][field] = e.target.value;
    setPresos(newPresos);
  };

  const handleAddPreso = async () => {
    const newPreso = { nombre: '', apellido: '', vehiculo: '', permiso: '', tobillera: '', guardia: '' };
    try {
      const response = await agregarPreso(newPreso);
      setPresos([...presos, response]);
    } catch (err) {
      console.error("Error al agregar preso", err);
    }
  };

  const handleUpdatePreso = async (index) => {
    const presoToUpdate = presos[index];
    try {
      await actualizarPreso(presoToUpdate._id, presoToUpdate);
      alert("Preso actualizado con éxito");
    } catch (err) {
      console.error("Error al actualizar preso", err);
    }
  };

  const handleDeletePreso = async (index) => {
    const presoToDelete = presos[index];
    try {
      await eliminarPreso(presoToDelete._id);
      setPresos(presos.filter((_, i) => i !== index));
      alert("Preso eliminado con éxito");
    } catch (err) {
      console.error("Error al eliminar preso", err);
    }
  };

  return (
    <div>
      <h2>Plantilla de Presos</h2>
      <button onClick={handleAddPreso}>Agregar Fila</button>
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Vehículo</th>
            <th>Nombre y Apellido del Detenido</th>
            <th>Permiso</th>
            <th>Presencia de Tobillera</th>
            <th>Guardia Designado</th>
          </tr>
        </thead>
        <tbody>
          {presos.map((preso, index) => (
            <tr key={preso._id}>
              <td>{index + 1}</td>
              <td>
                <select onChange={(e) => handleChange(e, index, 'vehiculo')} value={preso.vehiculo}>
                  <option value="">Seleccione</option>
                  {vehiculos.map((vehiculo, idx) => (
                    <option key={idx} value={vehiculo}>{vehiculo}</option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={`${preso.nombre} ${preso.apellido}`}
                  onChange={(e) => {
                    const [nombre, apellido] = e.target.value.split(' ');
                    handleChange({ target: { value: nombre } }, index, 'nombre');
                    handleChange({ target: { value: apellido } }, index, 'apellido');
                  }}
                />
                <button onClick={() => handleUpdatePreso(index)}>Modificar</button>
                <button onClick={() => handleDeletePreso(index)}>Eliminar</button>
              </td>
              <td>
                <select onChange={(e) => handleChange(e, index, 'permiso')} value={preso.permiso}>
                  <option value="">Seleccione</option>
                  {permisos.map((permiso, idx) => (
                    <option key={idx} value={permiso}>{permiso}</option>
                  ))}
                </select>
              </td>
              <td>
                <select onChange={(e) => handleChange(e, index, 'tobillera')} value={preso.tobillera}>
                  <option value="">Seleccione</option>
                  {tobilleras.map((tobillera, idx) => (
                    <option key={idx} value={tobillera}>{tobillera}</option>
                  ))}
                </select>
              </td>
              <td>
                <select onChange={(e) => handleChange(e, index, 'guardia')} value={preso.guardia}>
                  <option value="">Seleccione</option>
                  {guardias.map((guardia, idx) => (
                    <option key={idx} value={`${guardia.nombre} ${guardia.apellido}`}>{`${guardia.nombre} ${guardia.apellido}`}</option>
                  ))}
                </select>
                <button onClick={() => handleUpdatePreso(index)}>Modificar</button>
                <button onClick={() => handleDeletePreso(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Plantilla;
