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

class PreciosListContainer extends Component {
  componentDidMount(){
    fetchPrecios()
  }
  render() {
    return <PreciosList {...this.props} />
  }
}


export default connect(mapStateToProps, mapDispachToProps)(PreciosListContainer);