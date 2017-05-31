import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import axios from 'axios';

import 'foundation-sites/dist/css/foundation.min.css';

import ScreenLogin from './components/ScreenLogin';
import ScreenApp from './components/ScreenApp';

import APPS_LIST from 'appsList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: false,
      activeApp: 0,
      appsList: APPS_LIST.map( (item) => {
        return { id: item.id, time: 0 };
      })
    };
  }

  componentDidMount() {
    // API ajax request
    // axios.get('http://localhost:3004/apps_list')
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (response) {
    //     console.log(response);
    //   });

    window.addEventListener("message", function(e) {
      if(typeof(e.data) === 'string' &&
         JSON.parse(e.data).closeIframe === true) {
        this.setState({activeApp: 0});
      }
    }.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeApp !== 0) {
      this.startTimer(this.state.activeApp);

      let appName = APPS_LIST[this.state.activeApp-1].name;
      let appTime = this.state.appsList[this.state.activeApp-1].time;
      this.sendMessageToIframe({appName, appTime});
    } else {
      this.stopTimer();
    }
  }

  sendMessageToIframe(obj) {
    let message_JSON = JSON.stringify(obj);
    window.parent.frames[0].postMessage(message_JSON, '*');
  }

  startTimer(activeApp) {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      var stateCopy = Object.assign({}, this.state);
      stateCopy.appsList = stateCopy.appsList.slice();
      stateCopy.appsList[this.state.activeApp-1].time += 1;
      this.setState(stateCopy);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }


  handleClick(appId) {
    if (appId === this.state.activeApp) {
      this.setState({ activeApp: 0 });
    } else {
      this.setState({ activeApp: appId });
    }
  }

  handleSubmitLogin(isLoginAndPassCorrect) {
    if (isLoginAndPassCorrect === true) {
      this.setState({ logged_in: true });
    }
  }

  handleClickLogout() {
    this.setState({ activeApp: 0, logged_in: false });
  }

  render() {
    return (
      <div>
        {this.state.logged_in ? (
          <ScreenApp
            appsList={this.state.appsList}
            activeApp={this.state.activeApp}
            onClickApp={(appId) => this.handleClick(appId)}
            handleClickLogout={() => this.handleClickLogout()}
          />
        ) : (
          <ScreenLogin
            login={this.state.login}
            pass={this.state.pass}
            handleSubmitLogin={(e) => this.handleSubmitLogin(e)}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
