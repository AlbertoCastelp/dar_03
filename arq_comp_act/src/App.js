// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
