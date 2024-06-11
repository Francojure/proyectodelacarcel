// ListaPolicias.js
import React from 'react';

const ListaPolicias = ({ policias }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Número</th>
          <th>Unidad</th>
          <th>Nombre y Apellido</th>
        </tr>
      </thead>
      <tbody>
        {policias.map(policia => (
          <tr key={policia.id}>
            <td>{policia.numero}</td>
            <td>{policia.unidad}</td>
            <td>{policia.nombre} {policia.apellido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaPolicias;

