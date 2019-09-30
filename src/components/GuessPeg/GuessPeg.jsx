import React from 'react';
import styles from './GuessPeg.module.css'
const GuessPeg = (props) => (
  <button className={ styles.button } 
  style={{
    backgroundColor: props.color,
    borderColor: props.color
  }}
  >
    
    
  </button>
);

export default GuessPeg;
