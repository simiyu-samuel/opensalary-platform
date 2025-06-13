import React, { useState } from 'react';
import { 
  BarChart3, 
  Globe, 
  TrendingUp, 
  Users,
  MapPin,
  Building,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react';

const ComparisonPage: React.FC = () => {
  const [comparisonType, setComparisonType] = useState('roles');
  const [selectedRegion, setSelectedRegion] = useState('global');

  const roleComparisons = [
    {
      role: 'Senior Software Engineer',
      avgSalary: 145000,
      totalComp: 195000,
      growth: '+12%',
      trend: 'up',
      reports: 2340,
      topSkills: ['React', 'Python', 'AWS']
    },
    {
      role: 'Product Manager',
      avgSalary: 135000,
      totalComp: 180000,
      growth: '+8%',
      trend: 'up',
      reports: 1890,
      topSkills: ['Strategy', 'Analytics', 'Leadership']
    },
    {
      role: 'Data Scientist',
      avgSalary: 125000,
      totalComp: 165000,
      growth: '+15%',
      trend: 'up',
      reports: 1560,
      topSkills: ['Python', 'ML', 'SQL']
    },
    {
      role: 'UX Designer',
      avgSalary: 95000,
      totalComp: 115000,
      growth: '+5%',
      trend: 'up',
      reports: 890,
      topSkills: ['Figma', 'Research', 'Prototyping']
    }
  ];

  const regionComparisons = [
    {
      region: 'San Francisco Bay Area',
      country: 'United States',
      avgSalary: 165000,
      costOfLiving: 'Very High',
      adjustedSalary: 98000,
      growth: '+10%',
      trend: 'up',
      topCompanies: ['Google', 'Meta', 'Apple']
    },
    {
      region: 'New York City',
      country: 'United States',
      avgSalary: 145000,
      costOfLiving: 'Very High',
      adjustedSalary: 92000,
      growth: '+8%',
      trend: 'up',
      topCompanies: ['Goldman Sachs', 'JPMorgan', 'Meta']
    },
    {
      region: 'London',
      country: 'United Kingdom',
      avgSalary: 75000,
      costOfLiving: 'High',
      adjustedSalary: 58000,
      growth: '+6%',
      trend: 'up',
      topCompanies: ['DeepMind', 'Revolut', 'Monzo']
    },
    {
      region: 'Berlin',
      country: 'Germany',
      avgSalary: 65000,
      costOfLiving: 'Medium',
      adjustedSalary: 52000,
      growth: '+12%',
      trend: 'up',
      topCompanies: ['SAP', 'Zalando', 'N26']
    }
  ];

  const genderPayGapData = [
    {
      role: 'Software Engineer',
      maleAvg: 125000,
      femaleAvg: 118000,
      gap: 5.6,
      trend: 'improving'
    },
    {
      role: 'Product Manager',
      maleAvg: 140000,
      femaleAvg: 128000,
      gap: 8.6,
      trend: 'stable'
    },
    {
      role: 'Data Scientist',
      maleAvg: 130000,
      femaleAvg: 125000,
      gap: 3.8,
      trend: 'improving'
    },
    {
      role: 'UX Designer',
      maleAvg: 98000,
      femaleAvg: 95000,
      gap: 3.1,
      trend: 'improving'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUpRight className="h-4 w-4 text-green-500" />;
      case 'down': return <ArrowDownRight className="h-4 w-4 text-red-500" />;
      default: return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Salary Comparison Hub
          </h1>
          <p className="text-xl text-gray-600">
            Compare salaries across roles, regions, and demographics to understand market dynamics
          </p>
        </div>

        {/* Comparison Type Selector */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 animate-slideUp">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setComparisonType('roles')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                comparisonType === 'roles'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Building className="h-5 w-5" />
              <span>Compare Roles</span>
            </button>
            <button
              onClick={() => setComparisonType('regions')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                comparisonType === 'regions'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Globe className="h-5 w-5" />
              <span>Compare Regions</span>
            </button>
            <button
              onClick={() => setComparisonType('demographics')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                comparisonType === 'demographics'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Pay Gap Analysis</span>
            </button>
          </div>
        </div>

        {/* Role Comparison */}
        {comparisonType === 'roles' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-fadeInScale">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <span>Role Comparison</span>
              </h2>
              
              <div className="space-y-4">
                {roleComparisons.map((role, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className="grid lg:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.role}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{role.reports.toLocaleString()} reports</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {formatSalary(role.avgSalary)}
                        </div>
                        <div className="text-sm text-gray-600">Base Salary</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600 mb-1">
                          {formatSalary(role.totalComp)}
                        </div>
                        <div className="text-sm text-gray-600">Total Comp</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          {getTrendIcon(role.trend)}
                          <span className="text-lg font-bold text-green-600">{role.growth}</span>
                        </div>
                        <div className="text-sm text-gray-600">YoY Growth</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Top Skills:</span>
                        <div className="flex space-x-2">
                          {role.topSkills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Region Comparison */}
        {comparisonType === 'regions' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-fadeInScale">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Globe className="h-6 w-6 text-blue-600" />
                <span>Regional Salary Comparison</span>
              </h2>
              
              <div className="space-y-4">
                {regionComparisons.map((region, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className="grid lg:grid-cols-5 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{region.region}</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{region.country}</span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600 mb-1">
                          {formatSalary(region.avgSalary)}
                        </div>
                        <div className="text-sm text-gray-600">Avg Salary</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-bold text-orange-600 mb-1">
                          {formatSalary(region.adjustedSalary)}
                        </div>
                        <div className="text-sm text-gray-600">Cost Adjusted</div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium mb-1 ${
                          region.costOfLiving === 'Very High' ? 'bg-red-100 text-red-700' :
                          region.costOfLiving === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {region.costOfLiving}
                        </div>
                        <div className="text-sm text-gray-600">Cost of Living</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          {getTrendIcon(region.trend)}
                          <span className="text-lg font-bold text-green-600">{region.growth}</span>
                        </div>
                        <div className="text-sm text-gray-600">YoY Growth</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Top Companies:</span>
                        <div className="flex space-x-2">
                          {region.topCompanies.map((company, companyIndex) => (
                            <span key={companyIndex} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gender Pay Gap Analysis */}
        {comparisonType === 'demographics' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 animate-fadeInScale">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Gender Pay Gap Analysis</span>
              </h2>
              
              <div className="space-y-4">
                {genderPayGapData.map((data, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className="grid lg:grid-cols-5 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{data.role}</h3>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600 mb-1">
                          {formatSalary(data.maleAvg)}
                        </div>
                        <div className="text-sm text-gray-600">Male Average</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-600 mb-1">
                          {formatSalary(data.femaleAvg)}
                        </div>
                        <div className="text-sm text-gray-600">Female Average</div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-xl font-bold mb-1 ${
                          data.gap < 5 ? 'text-green-600' : 
                          data.gap < 8 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {data.gap}%
                        </div>
                        <div className="text-sm text-gray-600">Pay Gap</div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          data.trend === 'improving' ? 'bg-green-100 text-green-700' :
                          data.trend === 'worsening' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {data.trend}
                        </div>
                        <div className="text-sm text-gray-600">Trend</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white text-center animate-slideUp">
              <h3 className="text-2xl font-bold mb-4">Help Close the Pay Gap</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                By sharing your salary data anonymously, you're contributing to greater pay transparency 
                and helping identify and address wage inequalities across industries.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Submit Your Salary Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonPage;