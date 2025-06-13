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
  Zap
} from 'lucide-react';

const AnalyzerPage: React.FC = () => {
  const [analysisData] = useState({
    currentSalary: 95000,
    marketRate: 120000,
    percentile: 65,
    recommendations: [
      {
        title: 'Skill Enhancement',
        description: 'Learning cloud technologies could increase your salary by 15-20%',
        impact: '+$18,000',
        priority: 'high'
      },
      {
        title: 'Location Advantage',
        description: 'Similar roles in Seattle offer 25% higher compensation',
        impact: '+$30,000',
        priority: 'medium'
      },
      {
        title: 'Industry Switch',
        description: 'FinTech companies pay 12% more for your skillset',
        impact: '+$14,400',
        priority: 'medium'
      }
    ],
    insights: {
      strongPoints: ['Technical skills', 'Experience level', 'Education'],
      improvements: ['Cloud certifications', 'Leadership experience', 'Domain expertise']
    }
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Salary Analyzer
          </h1>
          <p className="text-xl text-gray-600">
            Get personalized insights and recommendations to maximize your earning potential
          </p>
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
            <div className="text-sm text-gray-600">
              Market: ${analysisData.marketRate.toLocaleString()}
            </div>
            <div className="mt-3 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
              21% Below Market
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-fadeInScale" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-teal-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">Percentile Rank</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {analysisData.percentile}th
            </div>
            <div className="text-sm text-gray-600">
              Out of similar professionals
            </div>
            <div className="mt-3 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
              Above Average
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
            <div className="text-sm text-gray-600">
              Estimated increase potential
            </div>
            <div className="mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
              High Potential
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
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{rec.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(rec.priority)}`}>
                      {rec.priority} priority
                    </span>
                    <span className="text-green-600 font-bold text-lg">{rec.impact}</span>
                  </div>
                </div>
                <p className="text-gray-600">{rec.description}</p>
                <button className="mt-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Analysis */}
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
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
              <h3 className="text-xl font-bold text-gray-900">Growth Areas</h3>
            </div>
            <div className="space-y-3">
              {analysisData.insights.improvements.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
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
            <h3 className="text-2xl font-bold">Market Insights</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">35%</div>
              <div className="text-blue-100">Demand Growth</div>
              <div className="text-sm text-blue-200 mt-1">for your role this year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$15K</div>
              <div className="text-blue-100">Avg. Raise</div>
              <div className="text-sm text-blue-200 mt-1">in your industry</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">72%</div>
              <div className="text-blue-100">Remote Options</div>
              <div className="text-sm text-blue-200 mt-1">available for your skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzerPage;