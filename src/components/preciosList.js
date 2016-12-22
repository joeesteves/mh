import React from 'react'
import loading from '../loading.gif'
const PreciosList = ({precios}) => {
  if (precios.length === 0 ){
    return <img src={loading} />
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {precios.map((precio, i) => <tr key={i}>
          <td> {precio.nombre} </td>
          <td> {precio.precio} </td>
        </tr>)}
      </tbody>
    </table>
  )
}


export default PreciosList