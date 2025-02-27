import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Layout from './app/Layout';

function App() {
  return (
    <Router>
      <div className="border- flex">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
