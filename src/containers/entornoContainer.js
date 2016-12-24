import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../components/loader'

function mapStateToProps(state) {
  return {
    entorno: state.entorno
  }
}

export default connect(mapStateToProps, null )(Loader)