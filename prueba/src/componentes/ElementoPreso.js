import React, { useState } from 'react';

const ElementoPreso = ({ preso, actualizarPreso, eliminarPreso }) => {
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState(preso.nombre);
  const [edad, setEdad] = useState(preso.edad);
  const [unidad, setUnidad] = useState(preso.unidad);
  const [horario, setHorario] = useState(preso.horario);
  const [oficial, setOficial] = useState(preso.oficial);
  const [destino, setDestino] = useState(preso.destino);

  const handleActualizar = () => {
    actualizarPreso(preso._id, { nombre, edad, unidad, horario, oficial, destino });
    setEditando(false);
  };

  return (
    <tr>
      {editando ? (
        <>
          <td><input value={nombre} onChange={(e) => setNombre(e.target.value)} /></td>
          <td><input value={edad} onChange={(e) => setEdad(e.target.value)} /></td>
          <td><input value={unidad} onChange={(e) => setUnidad(e.target.value)} /></td>
          <td><input value={horario} onChange={(e) => setHorario(e.target.value)} /></td>
          <td><input value={oficial} onChange={(e) => setOficial(e.target.value)} /></td>
          <td><input value={destino} onChange={(e) => setDestino(e.target.value)} /></td>
          <td><button onClick={handleActualizar}>Guardar</button></td>
        </>
      ) : (
        <>
          <td>{preso.nombre}</td>
          <td>{preso.edad}</td>
          <td>{preso.unidad}</td>
          <td>{preso.horario}</td>
          <td>{preso.oficial}</td>
          <td>{preso.destino}</td>
          <td>
            <button onClick={() => setEditando(true)}>Editar</button>
            <button onClick={() => eliminarPreso(preso._id)}>Eliminar</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ElementoPreso;
