// ListaPresos.js
import React from 'react';
import ElementoPreso from './ElementoPreso';

const ListaPresos = ({ presos, actualizarPreso, eliminarPreso }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Unidad</th>
          <th>Horario</th>
          <th>Oficial</th>
          <th>Destino</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {presos.map(preso => (
          <ElementoPreso
            key={preso._id}
            preso={preso}
            actualizarPreso={actualizarPreso}
            eliminarPreso={eliminarPreso}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ListaPresos;




