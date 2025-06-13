import React, { useState } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Lightbulb,
  BarChart3,
  Users,
  MapPin,
  Calendar,
  Award,
  Zap,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const AnalyzerPage: React.FC = () => {
  const [analysisStep, setAnalysisStep] = useState('input'); // input, analyzing, results
  const [userInput, setUserInput] = useState({
    currentSalary: '',
    jobTitle: '',
    location: '',
    experience: '',
    skills: ''
  });

  const [analysisData] = useState({
    currentSalary: 95000,
    marketRate: 120000,
    percentile: 65,
    fairnessScore: 72,
    recommendations: [
      {
        title: 'Skill Enhancement Priority',
        description: 'Learning cloud technologies (AWS/Azure) could increase your salary by 15-20%',
        impact: '+$18,000',
        priority: 'high',
        timeframe: '3-6 months',
        actionItems: ['Get AWS certification', 'Build cloud projects', 'Join cloud communities']
      },
      {
        title: 'Location Arbitrage',
        description: 'Similar roles in Seattle offer 25% higher compensation with similar cost of living',
        impact: '+$30,000',
        priority: 'medium',
        timeframe: '6-12 months',
        actionItems: ['Research Seattle market', 'Network with Seattle companies', 'Consider remote opportunities']
      },
      {
        title: 'Industry Switch Opportunity',
        description: 'FinTech companies pay 12% more for your skillset with high demand',
        impact: '+$14,400',
        priority: 'medium',
        timeframe: '3-9 months',
        actionItems: ['Study FinTech domain', 'Build relevant projects', 'Connect with FinTech professionals']
      }
    ],
    insights: {
      strongPoints: ['Technical expertise in React/Node.js', 'Strong problem-solving skills', 'Bachelor\'s degree from top university'],
      improvements: ['Cloud computing certifications', 'Leadership/mentoring experience', 'Domain expertise in high-paying sectors'],
      marketTrends: ['35% increase in demand for your role', 'Remote work increasing salaries by 8%', 'AI/ML skills premium of 22%']
    },
    negotiationTips: [
      'Research shows professionals who negotiate earn 13% more on average',
      'Best time to negotiate: After completing a major project or during performance reviews',
      'Use market data to support your case - you\'re currently 21% below market rate'
    ]
  });

  const handleAnalyze = () => {
    setAnalysisStep('analyzing');
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisStep('results');
    }, 3000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  const getFairnessColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getFairnessLabel = (score: number) => {
    if (score >= 80) return 'Fair';
    if (score >= 60) return 'Below Market';
    return 'Significantly Underpaid';
  };

  if (analysisStep === 'input') {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slideDown">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Salary Fairness Analyzer
            </h1>
            <p className="text-xl text-gray-600">
              Get personalized insights powered by GPT-4 and global salary data
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 animate-slideUp">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Tell us about your situation</h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Annual Salary *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={userInput.currentSalary}
                      onChange={(e) => setUserInput({...userInput, currentSalary: e.target.value})}
                      placeholder="e.g. 95000"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    value={userInput.jobTitle}
                    onChange={(e) => setUserInput({...userInput, jobTitle: e.target.value})}
                    placeholder="e.g. Senior Software Engineer"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={userInput.location}
                      onChange={(e) => setUserInput({...userInput, location: e.target.value})}
                      placeholder="e.g. San Francisco, CA"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={userInput.experience}
                      onChange={(e) => setUserInput({...userInput, experience: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-8">6-8 years</option>
                      <option value="9+">9+ years</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Skills & Technologies
                </label>
                <textarea
                  value={userInput.skills}
                  onChange={(e) => setUserInput({...userInput, skills: e.target.value})}
                  placeholder="e.g. React, Node.js, Python, AWS, Machine Learning"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleAnalyze}
                  disabled={!userInput.currentSalary || !userInput.jobTitle}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto disabled:opacity-50 disabled:transform-none"
                >
                  <Brain className="h-5 w-5" />
                  <span>Analyze My Salary</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (analysisStep === 'analyzing') {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI is analyzing your salary...</h2>
          <div className="space-y-2 text-gray-600">
            <p>🔍 Comparing against 150K+ salary reports</p>
            <p>🧠 Running GPT-4 fairness analysis</p>
            <p>📊 Generating personalized recommendations</p>
          </div>
          <div className="mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Salary Analysis Results
          </h1>
          <p className="text-xl text-gray-600">
            AI-powered insights based on global market data
          </p>
        </div>

        {/* Fairness Score */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 animate-slideUp text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Salary Fairness Score</h2>
          </div>
          
          <div className={`text-6xl font-bold mb-4 ${getFairnessColor(analysisData.fairnessScore)}`}>
            {analysisData.fairnessScore}/100
          </div>
          <div className={`text-xl font-semibold mb-6 ${getFairnessColor(analysisData.fairnessScore)}`}>
            {getFairnessLabel(analysisData.fairnessScore)}
          </div>
          
          <div className="bg-gray-200 rounded-full h-4 max-w-md mx-auto">
            <div 
              className={`h-4 rounded-full transition-all duration-1000 ${
                analysisData.fairnessScore >= 80 ? 'bg-green-500' :
                analysisData.fairnessScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${analysisData.fairnessScore}%` }}
            ></div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-fadeInScale">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">Current vs Market</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${analysisData.currentSalary.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Market: ${analysisData.marketRate.toLocaleString()}
            </div>
            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center space-x-1">
              <AlertTriangle className="h-3 w-3" />
              <span>21% Below Market</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-fadeInScale" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">Percentile Rank</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {analysisData.percentile}th
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Out of similar professionals
            </div>
            <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center space-x-1">
              <CheckCircle className="h-3 w-3" />
              <span>Above Average</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-fadeInScale" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">Growth Potential</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              +$62K
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Estimated increase potential
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center space-x-1">
              <TrendingUp className="h-3 w-3" />
              <span>High Potential</span>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 animate-slideUp">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">AI-Powered Recommendations</h2>
          </div>

          <div className="space-y-6">
            {analysisData.recommendations.map((rec, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{rec.title}</h3>
                    <p className="text-gray-600 mb-3">{rec.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>⏱️ {rec.timeframe}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(rec.priority)}`}>
                        {rec.priority} priority
                      </span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-green-600 mb-2">{rec.impact}</div>
                    <div className="text-sm text-gray-500">Potential increase</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Action Items:</h4>
                  <ul className="space-y-1">
                    {rec.actionItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <ArrowRight className="h-3 w-3 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 animate-slideUp">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Your Strengths</h3>
            </div>
            <div className="space-y-3">
              {analysisData.insights.strongPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 animate-slideUp">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Lightbulb className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Growth Opportunities</h3>
            </div>
            <div className="space-y-3">
              {analysisData.insights.improvements.map((area, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white animate-slideUp">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Market Insights & Negotiation Tips</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Market Trends</h4>
              <div className="space-y-3">
                {analysisData.insights.marketTrends.map((trend, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-blue-200" />
                    <span className="text-blue-100">{trend}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Negotiation Tips</h4>
              <div className="space-y-3">
                {analysisData.negotiationTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Lightbulb className="h-4 w-4 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzerPage;