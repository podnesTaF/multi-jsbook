/** @format */

import 'bulmaswatch/lux/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list/cell-list';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Greeting from './components/greeting/greeting';

const App = () => {
  return (
    <Provider store={store}>
      <Greeting />
      <div id="started">
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
