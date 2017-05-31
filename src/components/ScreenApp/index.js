import React, { Component } from 'react';
import _ from 'lodash';

import Sidebar from './Sidebar';
import Main from './Main';

import APPS_LIST from 'appsList';

export default ({appsList, activeApp, handleClickLogout, onClickApp}) => {
	return (
		<div>
			<Sidebar
        appsList={appsList}
        activeApp={activeApp}
        handleClickLogout={() => handleClickLogout()}
      />
      <Main
        isIframeVisible={activeApp !== 0}
        appsList={appsList}
        activeApp={activeApp}
        onClickApp={(appId) => onClickApp(appId)} />
		</div>
	);
}
