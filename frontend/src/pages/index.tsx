import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  ArrowRight,
  Star,
  CheckCircle 
} from 'lucide-react';

const Homepage: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Real-time Insights',
      description: 'Get up-to-date salary data from thousands of professionals worldwide'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is anonymized and protected with enterprise-grade security'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by professionals, for professionals seeking transparency'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Advanced algorithms provide personalized salary recommendations'
    }
  ];

  const stats = [
    { number: '150K+', label: 'Salary Reports' },
    { number: '50+', label: 'Countries' },
    { number: '1000+', label: 'Companies' },
    { number: '95%', label: 'Accuracy Rate' }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slideDown">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Know Your Worth
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover transparent salary insights, submit your data anonymously, and get AI-powered career recommendations.
            </p>
          </div>
          
          <div className="animate-slideUp flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <span>Explore Salaries</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:border-blue-300 transition-all duration-200">
              Submit Your Salary
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
              Why Choose OpenSalary?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most comprehensive and trusted salary intelligence platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInScale border border-gray-100"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Market Value?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who trust OpenSalary for career insights
          </p>
          <div className="flex justify-center items-center space-x-2 text-blue-100 mb-8">
            <CheckCircle className="h-5 w-5" />
            <span>100% Anonymous</span>
            <CheckCircle className="h-5 w-5 ml-4" />
            <span>Always Free</span>
            <CheckCircle className="h-5 w-5 ml-4" />
            <span>Trusted by 150K+</span>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;