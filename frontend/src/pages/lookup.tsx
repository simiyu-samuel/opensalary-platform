import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Building, 
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';

const LookupPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const sampleData = [
    {
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'San Francisco, CA',
      country: 'United States',
      salary: '$165,000',
      totalComp: '$245,000',
      range: '$140K - $190K',
      experience: '5-7 years',
      reports: 234,
      verified: true,
      skills: ['React', 'Python', 'AWS'],
      education: 'Bachelor\'s',
      genderPayGap: 2.1
    },
    {
      title: 'Product Manager',
      company: 'Meta',
      location: 'New York, NY',
      country: 'United States',
      salary: '$155,000',
      totalComp: '$220,000',
      range: '$130K - $180K',
      experience: '4-6 years',
      reports: 186,
      verified: true,
      skills: ['Strategy', 'Analytics', 'Leadership'],
      education: 'MBA',
      genderPayGap: 5.3
    },
    {
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Seattle, WA',
      country: 'United States',
      salary: '$135,000',
      totalComp: '$185,000',
      range: '$115K - $160K',
      experience: '3-5 years',
      reports: 142,
      verified: true,
      skills: ['Python', 'ML', 'SQL'],
      education: 'Master\'s',
      genderPayGap: 3.7
    },
    {
      title: 'Software Engineer',
      company: 'Spotify',
      location: 'Stockholm, Sweden',
      country: 'Sweden',
      salary: '€75,000',
      totalComp: '€95,000',
      range: '€65K - €85K',
      experience: '2-4 years',
      reports: 89,
      verified: true,
      skills: ['JavaScript', 'Node.js', 'React'],
      education: 'Bachelor\'s',
      genderPayGap: 1.2
    }
  ];

  const topSkills = [
    { skill: 'Machine Learning', avgIncrease: '+25%', demand: 'High' },
    { skill: 'Cloud Computing', avgIncrease: '+20%', demand: 'Very High' },
    { skill: 'React/Frontend', avgIncrease: '+15%', demand: 'High' },
    { skill: 'Data Science', avgIncrease: '+22%', demand: 'High' },
    { skill: 'DevOps', avgIncrease: '+18%', demand: 'Medium' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Global Salary Lookup
          </h1>
          <p className="text-xl text-gray-600">
            Search through 150K+ verified salary reports from professionals worldwide
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 animate-slideUp">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title or Company
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. Software Engineer, Google, Product Manager"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                >
                  <option value="">All Locations</option>
                  <option value="sf">San Francisco, CA</option>
                  <option value="ny">New York, NY</option>
                  <option value="seattle">Seattle, WA</option>
                  <option value="london">London, UK</option>
                  <option value="stockholm">Stockholm, Sweden</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                >
                  <option value="">All Levels</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9+">9+ years</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Filter className="h-5 w-5" />
              <span>Advanced Filters</span>
            </button>
            
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search Salaries</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-3 gap-4 animate-slideDown">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="">Any Size</option>
                  <option value="startup">Startup (1-50)</option>
                  <option value="medium">Medium (51-500)</option>
                  <option value="large">Large (500+)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="">Any Education</option>
                  <option value="bachelors">Bachelor's</option>
                  <option value="masters">Master's</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Remote Work</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="">Any</option>
                  <option value="remote">Fully Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">On-site</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6 animate-slideUp">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Search Results</h2>
            <p className="text-gray-600">Found {sampleData.length} verified salary reports</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>Salary (High to Low)</option>
              <option>Salary (Low to High)</option>
              <option>Most Recent</option>
              <option>Most Reports</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6 mb-8">
          {sampleData.map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-gray-100 transform hover:scale-[1.02] transition-all duration-300 animate-fadeInScale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    {item.verified && (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="h-3 w-3" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{item.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4" />
                      <span>{item.country}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.experience}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{item.reports} reports</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="h-4 w-4" />
                        <span>{item.education}</span>
                      </div>
                    </div>
                    {item.genderPayGap && (
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.genderPayGap < 3 ? 'bg-green-100 text-green-700' : 
                        item.genderPayGap < 5 ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-red-100 text-red-700'
                      }`}>
                        {item.genderPayGap}% pay gap
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="lg:col-span-2 text-right">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {item.salary}
                    </div>
                    <div className="text-lg text-gray-700 font-medium mb-1">
                      Total: {item.totalComp}
                    </div>
                    <div className="text-gray-600 text-sm">
                      Range: {item.range}
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200 flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Skills Insight */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white animate-slideUp">
          <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <TrendingUp className="h-6 w-6" />
            <span>Top Skills That Pay More</span>
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {topSkills.map((skill, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="font-semibold mb-2">{skill.skill}</div>
                <div className="text-2xl font-bold mb-1">{skill.avgIncrease}</div>
                <div className="text-purple-100 text-sm">{skill.demand} demand</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookupPage;