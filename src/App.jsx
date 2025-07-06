import React from 'react';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Sections
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className='relative min-h-screen bg-background text-foreground'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
