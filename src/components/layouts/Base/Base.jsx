import React from 'react';
import Audio from '../../organisms/Audio';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const Base = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Audio />
      <Footer />
    </main>
  );
};

export default Base;
