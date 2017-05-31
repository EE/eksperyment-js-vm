import React from 'react';

import styles from './styles.sass';

export default ({value}) => {
  return (
    <button type="submit" className={styles.formButtonSubmit}>{value}</button>
  );
}
