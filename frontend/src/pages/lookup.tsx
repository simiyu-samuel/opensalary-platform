import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Building, 
  Calendar,
  TrendingUp,
  Users,
  DollarSign 
} from 'lucide-react';

const LookupPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const sampleData = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      salary: '$145,000',
      range: '$120K - $180K',
      experience: '5-7 years',
      reports: 234
    },
    {
      title: 'Product Manager',
      company: 'Innovation Inc',
      location: 'New York, NY',
      salary: '$135,000',
      range: '$110K - $160K',
      experience: '4-6 years',
      reports: 186
    },
    {
      title: 'Data Scientist',
      company: 'DataFlow',
      location: 'Seattle, WA',
      salary: '$125,000',
      range: '$100K - $150K',
      experience: '3-5 years',
      reports: 142
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Salary Lookup
          </h1>
          <p className="text-xl text-gray-600">
            Search through thousands of salary reports to find your market rate
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 animate-slideUp">
          <div className="grid md:grid-cols-4 gap-4">
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
                  placeholder="e.g. Software Engineer, Google"
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
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                >
                  <option value="">All Companies</option>
                  <option value="tech">Tech Corp</option>
                  <option value="innovation">Innovation Inc</option>
                  <option value="dataflow">DataFlow</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search Salaries</span>
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6 animate-slideUp">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Search Results</h2>
            <p className="text-gray-600">Found {sampleData.length} salary reports</p>
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <Filter className="h-5 w-5" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {sampleData.map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-gray-100 transform hover:scale-[1.02] transition-all duration-300 animate-fadeInScale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{item.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Based on {item.reports} reports</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {item.salary}
                  </div>
                  <div className="text-gray-600 mb-2">
                    Range: {item.range}
                  </div>
                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200 flex items-center space-x-1 ml-auto">
                    <TrendingUp className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookupPage;