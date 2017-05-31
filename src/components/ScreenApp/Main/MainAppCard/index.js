import React from 'react';

import styles from './styles.sass';

export default ({appName, appDescription, isActive, onClickApp}) => {
  return (
    <div
      className={`${styles.mainAppCard} card ${isActive ? styles.active : ''}`}
      onClick={() => onClickApp()}>
      <div className={`card-divider ${styles.cardDivider}`}>
        {appName}
      </div>
      <div className={`card-section ${styles.cardSection}`}>
        {appDescription}
        </div>
    </div>
  );
};
