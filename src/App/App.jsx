import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../components/Routes';
import { routes } from '../assets/router';

const App = () => {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }} className="App">
        <Suspense fallback={<div>..loading</div>}>
          <Routes routes={routes} />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
