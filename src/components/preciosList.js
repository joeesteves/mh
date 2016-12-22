import React from 'react'
import loading from '../loading.gif'
const PreciosList = ({precios}) => {
  if (precios.length === 0 ){
    return <img src={loading} alt="loading" />
  }
  let columnHeaders = []

  for (let key in precios[0]) {
    if (precios[0].hasOwnProperty(key)) {
      columnHeaders.push(key)
    }
  }
  console.log(precios)
  return (
    <table>
      <thead>
        <tr>
        {columnHeaders.map((header,i) => {
          return <th key={i}>{header}</th>
        })}
        </tr>
      </thead>
      <tbody>
      { precios.map((precio, i) => {
        return <tr key={i}>
          { columnHeaders.map((header, i) => {
            return <td key={i}> { precio[header] } </td>
          })}
        </tr>
      })}
      </tbody>
    </table>
  )
}


export default PreciosList