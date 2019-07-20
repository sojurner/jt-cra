import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../components/Routes';
import { routes } from '../assets/router';
import Loading from '../components/atoms/Loading';

const App = () => {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }} className="App">
        <Suspense fallback={<Loading />}>
          <Routes routes={routes} />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
