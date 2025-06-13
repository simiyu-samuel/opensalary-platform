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
  Code,
  Users,
  Globe,
  Award,
  AlertCircle
} from 'lucide-react';

const SubmitPage: React.FC = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    country: '',
    baseSalary: '',
    totalCompensation: '',
    bonus: '',
    equity: '',
    experience: '',
    education: '',
    skills: '',
    companySize: '',
    workArrangement: '',
    gender: '',
    ethnicity: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Show success message or redirect
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Basic Information';
      case 2: return 'Compensation Details';
      case 3: return 'Additional Information';
      default: return 'Submit Salary';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideDown">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Submit Your Salary Data
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Help build the world's most comprehensive salary database and contribute to wage transparency
          </p>
          
          {/* Privacy Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-blue-700 mb-3">
              <Shield className="h-6 w-6" />
              <span className="font-semibold text-lg">100% Anonymous & Secure</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-blue-600 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>No personal identifiers stored</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Data immediately anonymized</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Enterprise-grade encryption</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-slideUp">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  ${currentStep >= step 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`
                    w-16 h-1 mx-2
                    ${currentStep > step ? 'bg-blue-500' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">{getStepTitle()}</h2>
            <p className="text-gray-600">Step {currentStep} of 3</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 animate-slideUp">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                      placeholder="e.g. Google, Meta, Startup Inc."
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City/Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. San Francisco, New York"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                      required
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="AU">Australia</option>
                      <option value="SG">Singapore</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                </div>

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
                      <option value="0-1">0-1 years (Entry Level)</option>
                      <option value="2-3">2-3 years (Junior)</option>
                      <option value="4-5">4-5 years (Mid-Level)</option>
                      <option value="6-8">6-8 years (Senior)</option>
                      <option value="9-12">9-12 years (Staff/Principal)</option>
                      <option value="13+">13+ years (Executive)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees (Startup)</option>
                      <option value="11-50">11-50 employees (Small)</option>
                      <option value="51-200">51-200 employees (Medium)</option>
                      <option value="201-1000">201-1000 employees (Large)</option>
                      <option value="1000+">1000+ employees (Enterprise)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Compensation Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 text-yellow-700">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">All compensation amounts should be in your local currency (annual)</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Bonus
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      name="bonus"
                      value={formData.bonus}
                      onChange={handleInputChange}
                      placeholder="e.g. 15000"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equity/Stock Value (Annual)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      name="equity"
                      value={formData.equity}
                      onChange={handleInputChange}
                      placeholder="e.g. 25000"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Compensation (Calculated)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      name="totalCompensation"
                      value={
                        (parseInt(formData.baseSalary) || 0) + 
                        (parseInt(formData.bonus) || 0) + 
                        (parseInt(formData.equity) || 0)
                      }
                      readOnly
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Arrangement
                </label>
                <select
                  name="workArrangement"
                  value={formData.workArrangement}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                >
                  <option value="">Select work arrangement</option>
                  <option value="remote">Fully Remote</option>
                  <option value="hybrid">Hybrid (2-3 days office)</option>
                  <option value="onsite">On-site</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
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
                    <option value="bootcamp">Coding Bootcamp</option>
                    <option value="self-taught">Self-taught</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Skills & Technologies
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="e.g. React, Node.js, Python, AWS, Machine Learning, Product Strategy"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Optional Demographics */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Optional Demographics (Helps with pay gap analysis)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender Identity
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ethnicity
                    </label>
                    <select
                      name="ethnicity"
                      value={formData.ethnicity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="asian">Asian</option>
                      <option value="black">Black/African American</option>
                      <option value="hispanic">Hispanic/Latino</option>
                      <option value="white">White</option>
                      <option value="mixed">Mixed Race</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5" />
                    <span>Submit Anonymously</span>
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Benefits Section */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white animate-slideUp">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center space-x-2">
            <Award className="h-6 w-6" />
            <span>Your Impact</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">+5 Points</div>
              <div className="text-green-100">Transparency Score</div>
              <div className="text-sm text-green-200 mt-1">Earn badges for contributing</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150K+</div>
              <div className="text-green-100">People Helped</div>
              <div className="text-sm text-green-200 mt-1">Your data helps others negotiate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Global</div>
              <div className="text-green-100">Impact</div>
              <div className="text-sm text-green-200 mt-1">Contributing to wage equality</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;