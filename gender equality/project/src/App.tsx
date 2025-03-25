import React from 'react';
import { Users, BookOpen, LineChart, Heart, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-pink-600" />
            <h1 className="text-2xl font-bold text-gray-900">EqualityNow</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#statistics" className="text-gray-600 hover:text-gray-900">Statistics</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empowering Change</span>
                <span className="block text-pink-600">Through Gender Equality</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Join us in creating a world where everyone has equal opportunities, regardless of gender.
                Together, we can make a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Key Areas Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Users className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Equal Rights</h3>
              <p className="text-gray-600">Promoting equal rights and opportunities in education, workplace, and society.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <BookOpen className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600">Providing resources and information about gender equality and its importance.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <LineChart className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitoring and sharing progress in achieving gender equality worldwide.</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white py-12" id="statistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Gender Equality Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Gender Pay Gap', value: '20%', desc: 'Average global gender pay gap' },
                { label: 'Women in Leadership', value: '29%', desc: 'Senior management positions' },
                { label: 'Education Access', value: '132M', desc: 'Girls out of school globally' },
                { label: 'Workplace Equality', value: '63%', desc: 'Women workforce participation' },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center">
                  <p className="text-4xl font-bold text-pink-600">{stat.value}</p>
                  <p className="text-lg font-semibold text-gray-900">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-12 bg-gradient-to-b from-purple-50 to-pink-50" id="resources">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Resources & Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'UN Women',
                  desc: 'United Nations Entity for Gender Equality and the Empowerment of Women',
                  link: 'https://www.unwomen.org'
                },
                {
                  title: 'HeForShe',
                  desc: 'Solidarity movement for gender equality',
                  link: 'https://www.heforshe.org'
                },
              ].map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                      <p className="text-gray-600 mt-2">{resource.desc}</p>
                    </div>
                    <ExternalLink className="h-6 w-6 text-pink-600" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Heart className="h-8 w-8 text-pink-600 mx-auto mb-4" />
            <p className="text-gray-400">Together we can create positive change</p>
            <p className="mt-4 text-sm text-gray-400">© 2024 EqualityNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;