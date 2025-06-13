import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  HelpCircle,
  TrendingUp,
  DollarSign,
  Briefcase,
  MapPin,
  Users
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI Salary Assistant powered by GPT-4. I can help you with salary insights, negotiation strategies, career advice, and market trends. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "What's the average salary for my role?",
        "How do I negotiate a raise?",
        "Which skills pay the most?",
        "Should I switch companies?"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    {
      category: "Salary Research",
      questions: [
        "What's the average salary for a Software Engineer in San Francisco?",
        "How much do Product Managers make at FAANG companies?",
        "What's the salary range for my experience level?"
      ]
    },
    {
      category: "Negotiation",
      questions: [
        "How do I negotiate a raise effectively?",
        "What's the best time to ask for a salary increase?",
        "How much should I ask for in a salary negotiation?"
      ]
    },
    {
      category: "Career Growth",
      questions: [
        "Which skills should I learn to increase my salary?",
        "Should I switch companies for a higher salary?",
        "How do remote jobs compare to on-site salaries?"
      ]
    }
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response with more realistic delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
        suggestions: getBotSuggestions(inputText)
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('salary') && (input.includes('software engineer') || input.includes('developer'))) {
      return "Based on our database of 150K+ salary reports, Software Engineers earn:\n\n• **Entry Level (0-2 years)**: $85K - $120K\n• **Mid Level (3-5 years)**: $120K - $160K\n• **Senior Level (6+ years)**: $160K - $220K\n• **Staff/Principal**: $220K - $350K+\n\nThese ranges vary significantly by location, with San Francisco and New York typically 20-30% higher. Would you like me to break this down by specific location or company?";
    } else if (input.includes('negotiate') || input.includes('raise')) {
      return "Here's a proven negotiation strategy:\n\n**1. Research & Preparation**\n• Use our salary lookup tool to find market rates\n• Document your achievements and value-add\n• Practice your pitch beforehand\n\n**2. Timing Matters**\n• Best times: After completing major projects, during performance reviews, or when taking on new responsibilities\n• Avoid: During company layoffs or budget cuts\n\n**3. The Conversation**\n• Start with your contributions, not your needs\n• Present market data as supporting evidence\n• Ask for 10-20% more than your target\n\n**4. Beyond Base Salary**\n• Consider equity, bonuses, PTO, remote work\n• Sometimes non-salary benefits are easier to negotiate\n\nWould you like help preparing specific talking points for your situation?";
    } else if (input.includes('skills') || input.includes('learn')) {
      return "The highest-paying skills right now based on our data:\n\n**🔥 Hot Skills (20-30% salary premium):**\n• Machine Learning / AI\n• Cloud Computing (AWS, Azure, GCP)\n• Cybersecurity\n• Blockchain/Web3\n\n**💼 Always Valuable:**\n• System Design & Architecture\n• Leadership & People Management\n• Data Science & Analytics\n• DevOps & Infrastructure\n\n**📈 Emerging Trends:**\n• Prompt Engineering\n• Edge Computing\n• Quantum Computing\n• Sustainability Tech\n\nThe key is combining technical skills with business impact. What's your current skill set? I can suggest the best next steps for your career path.";
    } else if (input.includes('switch') || input.includes('change') || input.includes('company')) {
      return "Switching companies can be a great salary strategy! Here's what our data shows:\n\n**📊 The Numbers:**\n• Average salary increase when switching: 15-25%\n• Best time to switch: Every 2-3 years for maximum growth\n• Remote opportunities often pay 5-15% more\n\n**🎯 When to Switch:**\n• You're 15%+ below market rate\n• No promotion/raise in 18+ months\n• Limited growth opportunities\n• Company/industry declining\n\n**💡 Strategy Tips:**\n• Apply while employed (stronger negotiating position)\n• Target companies 1-2 levels above your current one\n• Consider startups for equity upside\n• Don't just chase money - culture and growth matter\n\n**🚩 Red Flags:**\n• Switching too frequently (every year)\n• Only considering salary, ignoring other factors\n\nWhat's your current situation? I can help you evaluate if switching makes sense.";
    } else if (input.includes('remote') || input.includes('work from home')) {
      return "Remote work has significantly impacted salary dynamics:\n\n**💰 Salary Impact:**\n• Fully remote roles often pay 5-15% more\n• Access to global job market increases options\n• Some companies adjust salaries based on location\n\n**🌍 Geographic Arbitrage:**\n• Live in lower cost areas while earning SF/NYC salaries\n• International remote work growing rapidly\n• Hybrid roles becoming the new standard\n\n**📈 Market Trends:**\n• 72% of companies now offer remote options\n• Remote-first companies often pay premium for talent\n• Competition for remote roles is higher\n\n**⚖️ Trade-offs:**\n• **Pros**: Flexibility, no commute, global opportunities\n• **Cons**: Potential isolation, harder to get promoted, timezone challenges\n\nAre you looking for remote opportunities in a specific field?";
    } else if (input.includes('faang') || input.includes('big tech')) {
      return "FAANG/Big Tech compensation breakdown:\n\n**💰 Total Compensation Ranges:**\n• **Google**: $180K - $500K+ (L3-L7)\n• **Meta**: $170K - $480K+ (E3-E7)\n• **Amazon**: $160K - $450K+ (SDE1-Principal)\n• **Apple**: $175K - $470K+ (ICT2-ICT6)\n• **Netflix**: $200K - $600K+ (Senior-Staff)\n\n**📊 Compensation Structure:**\n• Base Salary: 40-60% of total comp\n• Stock/RSUs: 30-50% of total comp\n• Bonus: 10-20% of total comp\n• Sign-on bonus: $25K - $100K+\n\n**🎯 Getting In:**\n• Strong coding skills + system design\n• Previous experience at respected companies\n• Referrals significantly increase chances\n• Expect 4-6 rounds of interviews\n\nWhich company interests you most? I can provide more specific insights.";
    } else if (input.includes('startup') || input.includes('equity')) {
      return "Startup compensation is unique - here's the breakdown:\n\n**💰 Cash vs Equity Trade-off:**\n• Startups typically pay 10-30% below market in cash\n• Equity can be worth $0 or millions - high risk/reward\n• Earlier you join, more equity but higher risk\n\n**📈 Equity Evaluation:**\n• **Seed Stage**: 0.5-2% for senior roles\n• **Series A**: 0.25-1% for senior roles\n• **Series B+**: 0.1-0.5% for senior roles\n• Ask about: Vesting schedule, liquidation preferences, dilution\n\n**🎯 When Startups Make Sense:**\n• You believe in the product/market\n• Want to learn rapidly and wear many hats\n• Comfortable with uncertainty\n• Have financial runway (emergency fund)\n\n**⚠️ Red Flags:**\n• Unrealistic equity promises\n• No clear path to liquidity\n• Founders with no previous exits\n• Burning cash with no revenue plan\n\nWhat stage startup are you considering?";
    } else {
      return "I'd be happy to help you with that! I have access to comprehensive salary data from 150K+ professionals and can provide insights on:\n\n• **Salary Research**: Market rates by role, location, experience\n• **Negotiation Strategy**: Proven tactics to increase your compensation\n• **Career Growth**: Skills and paths that maximize earning potential\n• **Market Trends**: What's hot in the job market right now\n• **Company Insights**: Compensation at specific companies\n\nCould you be more specific about what you'd like to know? For example:\n- What role and location are you interested in?\n- Are you preparing for a negotiation?\n- Looking to switch careers or companies?\n- Want to know about specific skills or industries?";
    }
  };

  const getBotSuggestions = (userInput: string): string[] => {
    const input = userInput.toLowerCase();
    
    if (input.includes('salary') || input.includes('pay')) {
      return [
        "Show me salary trends for this role",
        "Compare salaries by location",
        "What affects salary the most?"
      ];
    } else if (input.includes('negotiate')) {
      return [
        "Help me prepare talking points",
        "What if they say no?",
        "How to negotiate non-salary benefits"
      ];
    } else if (input.includes('skills')) {
      return [
        "Create a learning roadmap for me",
        "Which certifications are worth it?",
        "How long to learn these skills?"
      ];
    } else {
      return [
        "Tell me more about this",
        "What are the next steps?",
        "Show me related data"
      ];
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Salary Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Get personalized salary advice powered by GPT-4 and real market data
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Quick Questions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-slideUp sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h3>
              <div className="space-y-4">
                {quickQuestions.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                      {category.category === 'Salary Research' && <TrendingUp className="h-4 w-4" />}
                      {category.category === 'Negotiation' && <DollarSign className="h-4 w-4" />}
                      {category.category === 'Career Growth' && <Briefcase className="h-4 w-4" />}
                      <span>{category.category}</span>
                    </h4>
                    <div className="space-y-2">
                      {category.questions.map((question, questionIndex) => (
                        <button
                          key={questionIndex}
                          onClick={() => handleQuickQuestion(question)}
                          className="w-full text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 animate-slideUp">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-t-2xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">AI Salary Assistant</h2>
                    <p className="text-blue-100 text-sm">Powered by GPT-4 • 150K+ salary data points</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div 
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
                        max-w-xs lg:max-w-2xl px-4 py-3 rounded-2xl
                        ${message.sender === 'user'
                          ? 'bg-blue-500 text-white ml-auto'
                          : 'bg-gray-100 text-gray-900'
                        }
                      `}>
                        <div className="text-sm leading-relaxed whitespace-pre-line">{message.text}</div>
                        <p className={`
                          text-xs mt-2 opacity-70
                          ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}
                        `}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>

                    {/* Bot Suggestions */}
                    {message.sender === 'bot' && message.suggestions && (
                      <div className="ml-12 mt-3 flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start space-x-3 animate-fadeInScale">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                    placeholder="Ask me about salaries, negotiations, or career advice..."
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none flex items-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span className="hidden sm:block">Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInScale">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-time Data</h3>
            <p className="text-gray-600 text-sm">Access to 150K+ verified salary reports</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInScale" style={{ animationDelay: '100ms' }}>
            <div className="bg-teal-100 p-3 rounded-lg inline-block mb-4">
              <MessageCircle className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">GPT-4 Powered</h3>
            <p className="text-gray-600 text-sm">Advanced AI for personalized advice</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInScale" style={{ animationDelay: '200ms' }}>
            <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Negotiation Help</h3>
            <p className="text-gray-600 text-sm">Proven strategies to increase earnings</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInScale" style={{ animationDelay: '300ms' }}>
            <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Market Insights</h3>
            <p className="text-gray-600 text-sm">Global trends and industry analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;