import * as React from 'react';
// import logo from './logo.svg';
import './App.css';

import { ReactComponent as logo } from './logo.svg';
import { Icon } from 'antd';
import { CustomIconComponentProps } from 'antd/lib/icon';

const App:React.FC = () => {
    return (
      <div className="App">
        <header className="App-header">
          <Icon component={ logo // as React.ComponentType<CustomIconComponentProps>
          }></Icon>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}

export default App;
