import React, { useState } from 'react';
import { 
  Upload, 
  Shield, 
  CheckCircle, 
  MapPin, 
  Building, 
  Calendar,
  DollarSign,
  GraduationCap,
  Code
} from 'lucide-react';

const SubmitPage: React.FC = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    baseSalary: '',
    totalCompensation: '',
    experience: '',
    education: '',
    skills: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Submit Your Salary
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Help others by sharing your compensation data anonymously
          </p>
          
          {/* Privacy Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-blue-700">
              <Shield className="h-5 w-5" />
              <span className="font-medium">100% Anonymous & Secure</span>
            </div>
            <p className="text-blue-600 text-sm mt-2">
              Your personal information is never stored. All data is anonymized immediately.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 animate-slideUp">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="e.g. Senior Software Engineer"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company *
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Google, Meta, etc."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. San Francisco, CA"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9-12">9-12 years</option>
                  <option value="13+">13+ years</option>
                </select>
              </div>
            </div>

            {/* Base Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base Salary (Annual) *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="baseSalary"
                  value={formData.baseSalary}
                  onChange={handleInputChange}
                  placeholder="e.g. 120000"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Total Compensation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Compensation
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="totalCompensation"
                  value={formData.totalCompensation}
                  onChange={handleInputChange}
                  placeholder="Including bonus, equity, etc."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Education Level
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
              >
                <option value="">Select education level</option>
                <option value="high-school">High School</option>
                <option value="associates">Associate's Degree</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="bootcamp">Bootcamp</option>
                <option value="self-taught">Self-taught</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Skills & Technologies
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="e.g. React, Node.js, Python, AWS, etc."
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* Benefits */}
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Why Submit Your Salary?</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-green-700">
              <div>• Help others negotiate fair compensation</div>
              <div>• Increase industry pay transparency</div>
              <div>• Get insights into your market value</div>
              <div>• Support wage equality initiatives</div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <Upload className="h-5 w-5" />
              <span>Submit Anonymously</span>
            </button>
            <p className="text-gray-500 text-sm mt-4">
              By submitting, you agree to our privacy policy. Your data will be anonymized.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitPage;