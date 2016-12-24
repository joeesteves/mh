import React, {Component} from 'react'

const Loader = (props) => (
  <div className={props.entorno.loader ? 'loader':'hide'}>
    <svg viewBox="0 0 32 32" width="32" height="32">
      <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
    </svg>
  </div>
)

export default Loader 