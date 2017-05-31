import React from 'react';

import MainAppsList from './MainAppsList';
import MainIframe from './MainIframe';

import styles from './styles.sass';

export default({isIframeVisible, appsList, activeApp, onClickApp}) => {
	return (
		<div className={styles.main}>
      {isIframeVisible ? (
        <MainIframe iframeSrc="http://localhost:8002"/>
      ) : (
        <MainAppsList
          appsList={appsList}
          activeApp={activeApp}
          onClickApp={(appId) => onClickApp(appId)}
        />
      )}
		</div>
	);
};
