import React from 'react';
import _ from 'lodash';

import styles from './styles.sass';

import APPS_LIST from 'appsList';

const createTop5AppsList = (appsList) => {
  return _.slice(_.reverse(_.sortBy(appsList, 'time')), 0, 5);
};

export default ({appsList, activeApp}) => {
  return (
    <div className={styles.sidebarAppsList}>
      <table>
        <thead>
          <tr>
            <th>Nazwa aplikacji</th>
            <th className="text-center">Czas</th>
          </tr>
        </thead>
        <tbody>

          {createTop5AppsList(appsList).map(function(listValue) {
            return (
              <tr
                key={listValue.id+1}
                className={ (listValue.id === activeApp) ? styles.active : '' }>
                <td>{APPS_LIST[listValue.id-1].name}</td>
                <td className={`text-center`}>{listValue.time} sek.</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
