import React, { useState } from 'react';
import { ChevronRight, DollarSign } from 'lucide-react';
import Homepage from './pages/index';
import LookupPage from './pages/lookup';
import SubmitPage from './pages/submit';
import AnalyzerPage from './pages/analyzer';
import BadgesPage from './pages/badges';
import ChatPage from './pages/chat';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'lookup':
        return <LookupPage />;
      case 'submit':
        return <SubmitPage />;
      case 'analyzer':
        return <AnalyzerPage />;
      case 'badges':
        return <BadgesPage />;
      case 'chat':
        return <ChatPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;