import React from 'react';

import SidebarUsername from './SidebarUsername';
import SidebarAppsList from './SidebarAppsList';

import styles from './styles.sass';

export default({handleClickLogout, appsList, activeApp}) => {
	return (
		<div className={styles.sidebar}>
			<div className="row column">
				<SidebarUsername username="username"/>
        <a href="#" onClick={() => handleClickLogout()}>Logout</a>

				<h4>Top 5 Apps</h4>
				<SidebarAppsList appsList={appsList} activeApp={activeApp}/>
			</div>
		</div>
	);
};
