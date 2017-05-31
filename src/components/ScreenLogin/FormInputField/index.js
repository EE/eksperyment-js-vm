import React from 'react';

import styles from './styles.sass';

export default ({id, label, type, placeholder, value, onChange}) => {
  return (
    <div className={styles.formInputField}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
