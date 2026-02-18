
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onViewChange={handleViewChange} currentView={currentView} />
      
      <div className="flex-1">
        {currentView === 'home' ? (
          <HomePage />
        ) : (
          <AdminPanel />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
