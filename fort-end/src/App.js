import './App.css';
import React, { useEffect, useState } from 'react'
import Login from './common/login/index.tsx';
import Project from './common/project/index.tsx';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider , Radio} from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');


function App() {
  const [locale, setLocal] = useState(enUS);
  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    console.log(localeValue)
    setLocal(localeValue);
  };
  return (
    <div className="App">
      <ConfigProvider locale={locale}>
        <Router>
            <Route path="/login" component={Login} />
            <Route path="/project" component={Project} />
        </Router>
      </ConfigProvider>
    </div>
  );
}
export default App;
