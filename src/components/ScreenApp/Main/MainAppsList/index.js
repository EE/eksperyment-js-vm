import React from 'react';

import MainAppCard from '../MainAppCard';

import APPS_LIST from 'appsList';

export default ({appsList, onClickApp, activeApp}) => {
	return (
		<div className={`row small-up-4`}>

			{appsList.map(function(listValue) {
				return (
					<div className="column column-block" key={listValue.id}>
						<MainAppCard
              appName={APPS_LIST[listValue.id-1].name}
              appDescription={APPS_LIST[listValue.id-1].description}
              onClickApp={() => onClickApp(listValue.id)}
              isActive={(listValue.id === activeApp)}
            />
					</div>
				);
			}, this)}

		</div>
	);
};
