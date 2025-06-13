import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  HelpCircle,
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI Salary Assistant. I can help you with salary insights, career advice, and market trends. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    "What's the average salary for my role?",
    "How do I negotiate a raise?",
    "Which skills pay the most?",
    "Should I switch companies?",
    "What are market trends in tech?"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('salary') || input.includes('pay')) {
      return "Based on current market data, I can help you understand salary ranges for your role. The average salary varies by location, experience, and company size. Would you like me to analyze specific data for your position?";
    } else if (input.includes('negotiate') || input.includes('raise')) {
      return "Great question! Here are key negotiation tips: 1) Research market rates using our salary lookup tool, 2) Document your achievements and value-add, 3) Choose the right timing, 4) Practice your pitch. I can help you prepare specific talking points based on your role.";
    } else if (input.includes('skills') || input.includes('learn')) {
      return "The highest-paying skills right now include cloud computing (AWS, Azure), machine learning, cybersecurity, and full-stack development. Based on our data, professionals with these skills earn 15-30% more. What's your current skill set?";
    } else if (input.includes('switch') || input.includes('change')) {
      return "Switching companies can be a great way to increase salary! On average, job switchers see 10-20% salary increases. Consider factors like company culture, growth opportunities, and total compensation. Would you like me to analyze opportunities in your field?";
    } else {
      return "I'd be happy to help you with that! I have access to comprehensive salary data and can provide insights on market trends, negotiation strategies, and career advancement. Could you be more specific about what you'd like to know?";
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Chat Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Get personalized salary advice and career insights powered by AI
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 animate-slideUp">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Salary AI Assistant</h2>
                <p className="text-blue-100 text-sm">Powered by advanced salary intelligence</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex items-start space-x-3 animate-fadeInScale ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`
                  p-2 rounded-lg flex-shrink-0
                  ${message.sender === 'user' 
                    ? 'bg-blue-100' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }
                `}>
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                
                <div className={`
                  max-w-xs lg:max-w-md px-4 py-3 rounded-2xl
                  ${message.sender === 'user'
                    ? 'bg-blue-500 text-white ml-auto'
                    : 'bg-gray-100 text-gray-900'
                  }
                `}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`
                    text-xs mt-2 opacity-70
                    ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}
                  `}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-3">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <HelpCircle className="h-3 w-3" />
                  <span>{question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about salaries, negotiations, or career advice..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none flex items-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span className="hidden sm:block">Send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInScale">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Market Insights</h3>
            <p className="text-gray-600 text-sm">Get real-time salary trends and market analysis</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInScale" style={{ animationDelay: '100ms' }}>
            <div className="bg-teal-100 p-3 rounded-lg inline-block mb-4">
              <MessageCircle className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Personalized Advice</h3>
            <p className="text-gray-600 text-sm">Receive tailored recommendations for your career</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInScale" style={{ animationDelay: '200ms' }}>
            <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Negotiation Tips</h3>
            <p className="text-gray-600 text-sm">Learn proven strategies to maximize your earnings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;