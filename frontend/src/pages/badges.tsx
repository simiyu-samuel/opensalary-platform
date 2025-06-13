import React, { useState } from 'react';
import { 
  Award, 
  Shield, 
  Star, 
  Trophy, 
  Crown,
  CheckCircle,
  Lock,
  TrendingUp,
  Users,
  Heart
} from 'lucide-react';

const BadgesPage: React.FC = () => {
  const [userScore] = useState(85);
  
  const badges = [
    {
      id: 'transparency-champion',
      name: 'Transparency Champion',
      description: 'Shared salary data 5+ times',
      icon: Shield,
      earned: true,
      rarity: 'common',
      points: 100
    },
    {
      id: 'data-contributor',
      name: 'Data Contributor',
      description: 'Provided detailed compensation breakdown',
      icon: Star,
      earned: true,
      rarity: 'common',
      points: 50
    },
    {
      id: 'market-analyst',
      name: 'Market Analyst',
      description: 'Used salary insights 10+ times',
      icon: TrendingUp,
      earned: true,
      rarity: 'uncommon',
      points: 150
    },
    {
      id: 'community-builder',
      name: 'Community Builder',
      description: 'Referred 3+ colleagues to OpenSalary',
      icon: Users,
      earned: false,
      rarity: 'uncommon',
      points: 200
    },
    {
      id: 'salary-guru',
      name: 'Salary Guru',
      description: 'Achieved 95%+ transparency score',
      icon: Crown,
      earned: false,
      rarity: 'rare',
      points: 500
    },
    {
      id: 'advocate',
      name: 'Pay Equity Advocate',
      description: 'Helped close gender pay gaps',
      icon: Heart,
      earned: false,
      rarity: 'epic',
      points: 1000
    }
  ];

  const levels = [
    { name: 'Bronze', min: 0, max: 24, color: 'bg-amber-600' },
    { name: 'Silver', min: 25, max: 49, color: 'bg-gray-400' },
    { name: 'Gold', min: 50, max: 74, color: 'bg-yellow-500' },
    { name: 'Platinum', min: 75, max: 89, color: 'bg-blue-500' },
    { name: 'Diamond', min: 90, max: 100, color: 'bg-purple-500' }
  ];

  const currentLevel = levels.find(level => userScore >= level.min && userScore <= level.max);
  const nextLevel = levels.find(level => level.min > userScore);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'uncommon': return 'border-green-300 bg-green-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-yellow-300 bg-yellow-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600';
      case 'uncommon': return 'text-green-600';
      case 'rare': return 'text-blue-600';
      case 'epic': return 'text-purple-600';
      case 'legendary': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transparency Score & Badges
          </h1>
          <p className="text-xl text-gray-600">
            Earn badges and build your transparency score by contributing to salary equality
          </p>
        </div>

        {/* Score Overview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 animate-slideUp">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className={`w-32 h-32 rounded-full ${currentLevel?.color} flex items-center justify-center mb-4 shadow-lg`}>
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                <span className="text-2xl font-bold text-gray-900">{userScore}</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {currentLevel?.name} Level
            </h2>
            <p className="text-gray-600">
              Transparency Score: {userScore}/100
            </p>
          </div>

          {/* Progress Bar */}
          {nextLevel && (
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{currentLevel?.name}</span>
                <span>{nextLevel.name}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${currentLevel?.color} transition-all duration-500`}
                  style={{ width: `${((userScore - currentLevel!.min) / (nextLevel.min - currentLevel!.min)) * 100}%` }}
                ></div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                {nextLevel.min - userScore} points to {nextLevel.name}
              </p>
            </div>
          )}
        </div>

        {/* Badges Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-slideDown">
            Your Badges
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              const isEarned = badge.earned;
              
              return (
                <div 
                  key={badge.id}
                  className={`
                    relative p-6 rounded-2xl border-2 transition-all duration-300 animate-fadeInScale
                    ${isEarned 
                      ? `${getRarityColor(badge.rarity)} shadow-lg hover:shadow-xl transform hover:scale-105` 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                    }
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {!isEarned && (
                    <div className="absolute top-4 right-4">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className={`
                      w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                      ${isEarned 
                        ? 'bg-white shadow-md' 
                        : 'bg-gray-200'
                      }
                    `}>
                      <Icon className={`h-8 w-8 ${isEarned ? getRarityTextColor(badge.rarity) : 'text-gray-400'}`} />
                    </div>
                    
                    <h4 className={`font-bold text-lg mb-2 ${isEarned ? 'text-gray-900' : 'text-gray-500'}`}>
                      {badge.name}
                    </h4>
                    
                    <p className={`text-sm mb-4 ${isEarned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {badge.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-medium uppercase px-2 py-1 rounded-full ${
                        isEarned 
                          ? `${getRarityTextColor(badge.rarity)} bg-white` 
                          : 'text-gray-400 bg-gray-200'
                      }`}>
                        {badge.rarity}
                      </span>
                      <span className={`font-bold ${isEarned ? 'text-gray-900' : 'text-gray-400'}`}>
                        +{badge.points} pts
                      </span>
                    </div>
                    
                    {isEarned && (
                      <div className="mt-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leaderboard Preview */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white animate-slideUp">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Community Leaderboard</h3>
            <p className="text-blue-100">See how you rank among transparency champions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">#247</div>
              <div className="text-blue-100">Your Rank</div>
              <div className="text-sm text-blue-200 mt-1">out of 15,000+ users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Top 2%</div>
              <div className="text-blue-100">Percentile</div>
              <div className="text-sm text-blue-200 mt-1">transparency contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3/6</div>
              <div className="text-blue-100">Badges Earned</div>
              <div className="text-sm text-blue-200 mt-1">keep contributing!</div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              View Full Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;