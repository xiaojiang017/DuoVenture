import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './common/login/index.jsx';
import Project from './common/project/index.jsx';
import Earningedtail from "./common/project/earnings/earningedtail.jsx";

import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ConfigProvider, Radio } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

function App() {
  const [locale, setLocal] = useState(zhCN);
  return (
    <div className="App">
      <ConfigProvider locale={locale}>
        <Router>
          {
            !localStorage.dvtoken && <Route path="/">
              <Redirect to="/login" />
            </Route>
          }
          <Route path="/login" component={Login} />
          <Route path="/project" component={Project} />
        </Router>
      </ConfigProvider>
    </div>
  );
}
export default App;
