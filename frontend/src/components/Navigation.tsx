import React from 'react';
import { 
  Home, 
  Search, 
  BarChart2,
  PlusCircle, 
  BarChart3, 
  Award, 
  MessageCircle,
  DollarSign 
} from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lookup', label: 'Lookup', icon: Search },
    { id: 'comparison', label: 'Compare', icon: BarChart2 },
    { id: 'submit', label: 'Submit', icon: PlusCircle },
    { id: 'analyzer', label: 'AI Analyzer', icon: BarChart3 },
    { id: 'badges', label: 'Badges', icon: Award },
    { id: 'chat', label: 'AI Chat', icon: MessageCircle },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              OpenSalary
            </span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700 shadow-md transform scale-105' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:block">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;