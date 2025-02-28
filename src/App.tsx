import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Layout from './app/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="border- flex">
          <Layout />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
