import React from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const Base = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Base;
