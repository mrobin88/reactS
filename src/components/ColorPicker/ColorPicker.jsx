import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => (
  <div className={styles.div}>
    {props.colors.map((color, idx) =>
      <button
        key={color}
        className={styles.button}
        style={{
          backgroundColor: props.selColorIdx === idx ? 'white' : color,
          borderColor: color
        }}
      />
    )}
  </div>
);

export default ColorPicker;
