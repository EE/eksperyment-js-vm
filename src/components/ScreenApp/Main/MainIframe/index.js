import React from 'react';

import styles from './styles.sass';

export default ({iframeSrc}) => {
  return (
    <div className={styles.mainIframe}>
      <iframe src={iframeSrc}></iframe>
    </div>
  );
};
