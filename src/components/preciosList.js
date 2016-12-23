import React, {Component} from 'react'
import loading from '../loading.gif'
import './components.css'

class PreciosList extends Component {
  constructor(props){
    super(props)
  }

  handleSearch(){
    this.props.onSearch(this.refs.input.value)
  }

  render() {
    let columnHeaders = []
    if (this.props.precios.length === 0 ){
      <img src={loading} alt="loading" />
    }

    for (let key in this.props.precios[0]) {
      if (this.props.precios[0].hasOwnProperty(key)) {
        if(!["hide"].includes(key))
          columnHeaders.push(key)
      }
    }
    return (
      <div>
      <input type="text" ref="input" onChange={this.handleSearch.bind(this)} />
      <table className="preciosTable">
        <thead>
          <tr>
          {columnHeaders.map((header,i) => {
            return <th key={i}>{header.toUpperCase()}</th>
          })}
          </tr>
        </thead>
        <tbody>
        { this.props.precios.map((precio, i) => {
          if(precio.hide)
            return 
          return <tr key={i} className={precio.hide? 'hide': ''}>
            { columnHeaders.map((header, i) => {
              return <td key={i} className={header}> { precio[header] } </td>
            })}
          </tr>
        })}
        </tbody>
      </table>
      </div>
    )
  }

}


export default PreciosList