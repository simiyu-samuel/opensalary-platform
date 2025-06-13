import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  BarChart3,
  MessageCircle,
  Award
} from 'lucide-react';

interface HomepageProps {
  setCurrentPage: (page: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Real-time Global Insights',
      description: 'Access live salary data from professionals worldwide with AI-powered analysis',
      action: () => setCurrentPage('lookup')
    },
    {
      icon: Shield,
      title: 'Anonymous & Secure',
      description: 'Your data is protected with enterprise-grade security and complete anonymity',
      action: () => setCurrentPage('submit')
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by professionals, for professionals seeking wage transparency',
      action: () => setCurrentPage('badges')
    },
    {
      icon: Zap,
      title: 'AI-Powered Analysis',
      description: 'Get personalized salary insights and fairness analysis powered by GPT-4',
      action: () => setCurrentPage('analyzer')
    }
  ];

  const stats = [
    { number: '150K+', label: 'Salary Reports', sublabel: 'Real submissions from professionals' },
    { number: '50+', label: 'Countries', sublabel: 'Global salary transparency' },
    { number: '1000+', label: 'Companies', sublabel: 'From startups to Fortune 500' },
    { number: '95%', label: 'Accuracy Rate', sublabel: 'AI-verified data quality' }
  ];

  const quickActions = [
    {
      title: 'Find Your Market Rate',
      description: 'Search salaries by role, location, and experience',
      icon: TrendingUp,
      action: () => setCurrentPage('lookup'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Compare Salaries',
      description: 'See how different roles and regions stack up',
      icon: BarChart3,
      action: () => setCurrentPage('comparison'),
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'AI Fairness Check',
      description: 'Is your salary fair? Get AI-powered insights',
      icon: Zap,
      action: () => setCurrentPage('analyzer'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Chat with AI',
      description: 'Ask questions about salary negotiation and trends',
      icon: MessageCircle,
      action: () => setCurrentPage('chat'),
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slideDown">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              <span>Global Wage Transparency Platform</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Know Your True Worth
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover transparent salary insights, submit your data anonymously, and get AI-powered fairness analysis. 
              Join the movement for global wage equality.
            </p>
          </div>
          
          <div className="animate-slideUp flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => setCurrentPage('lookup')}
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>Explore Salaries</span>
            </button>
            <button 
              onClick={() => setCurrentPage('submit')}
              className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:border-blue-300 transition-all duration-200"
            >
              Submit Your Salary
            </button>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-left animate-fadeInScale border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-gradient-to-r ${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Professionals Worldwide</h2>
            <p className="text-gray-600">Real data, real impact on wage transparency</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fadeInScale bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slideDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why OpenSalary?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most comprehensive AI-powered salary intelligence platform for global wage transparency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={index}
                  onClick={feature.action}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInScale border border-gray-100 text-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-slideUp">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Mission: Global Wage Equality
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            We believe that salary transparency is the key to closing wage gaps and ensuring fair compensation for all. 
            By sharing data anonymously and leveraging AI insights, we're building a more equitable future for workers worldwide.
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-100 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>AI-Powered Insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Global Impact</span>
            </div>
          </div>
          <button 
            onClick={() => setCurrentPage('submit')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Join the Movement
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;