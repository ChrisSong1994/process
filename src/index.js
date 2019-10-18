import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { Provider as StoreProvider } from 'react-redux';
import store from 'src/store';
import HTML5Backend from 'react-dnd-html5-backend';
import App from './routes';
import 'antd/dist/antd.css';
import './assets/styles/index.less';

ReactDOM.render(
  <StoreProvider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </StoreProvider>,
  document.getElementById('root')
);
