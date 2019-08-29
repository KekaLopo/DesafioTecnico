import React from 'react';
import "./styles.css";

const Srcbar = (props) => (
  <div >
  <form action="" onSubmit={props.handleSubmit}>
  <input placeholder="Procure um Filme" type="text" onChange={props.handleChange}></input>
  </form>
  </div>
);

export default Srcbar;
