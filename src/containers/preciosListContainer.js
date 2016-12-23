import React, { Component } from 'react'
import { connect } from 'react-redux';
import PreciosList from '../components/preciosList';
import { fetchPrecios, searchProductos } from '../actions'

function mapStateToProps(state) {
  return {
    precios: state.precios
  }
}


const mapDispachToProps = (dispatch) => ({
  onSearch(text){
    dispatch(searchProductos(text))
  }
})

let fp
class PreciosListContainer extends Component {
  componentDidMount(){
    fetchPrecios()
    fp = setInterval(fetchPrecios, 3000)
  }
  render() {
    return <PreciosList {...this.props} />
  }
  componenWillUnmount(){
    clearInterval(fp)
  }
}


export default connect(mapStateToProps, mapDispachToProps)(PreciosListContainer);