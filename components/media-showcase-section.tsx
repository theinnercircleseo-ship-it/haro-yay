export function MediaShowcaseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            You'll Be Featured <span className="text-secondary">Here</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-16 text-pretty max-w-3xl mx-auto">
            While your competitors buy links from unknown blogs, you'll be featured as an expert source in the
            publications your customers actually read and trust.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mobile mockups showing elite publications */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 h-64">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded mr-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">F</span>
                      </div>
                      <span className="font-bold text-sm">Forbes</span>
                    </div>
                    <h3 className="font-bold text-xs mb-2 leading-tight">
                      Industry Expert Shares Key Insights on Market Trends
                    </h3>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 h-64">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-red-600 rounded mr-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">Inc</span>
                      </div>
                      <span className="font-bold text-sm">Inc Magazine</span>
                    </div>
                    <h3 className="font-bold text-xs mb-2 leading-tight">
                      CEO Reveals Strategy Behind Company's Rapid Growth
                    </h3>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 h-64">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-600 rounded mr-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">E</span>
                      </div>
                      <span className="font-bold text-sm">Entrepreneur</span>
                    </div>
                    <h3 className="font-bold text-xs mb-2 leading-tight">
                      Thought Leader Discusses Innovation in Digital Space
                    </h3>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group lg:col-start-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 h-64">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-600 rounded mr-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">TC</span>
                      </div>
                      <span className="font-bold text-sm">TechCrunch</span>
                    </div>
                    <h3 className="font-bold text-xs mb-2 leading-tight">
                      Industry Analysis: Future of Technology Trends
                    </h3>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 h-64">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-800 rounded mr-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">HBR</span>
                      </div>
                      <span className="font-bold text-sm">Harvard Business Review</span>
                    </div>
                    <h3 className="font-bold text-xs mb-2 leading-tight">
                      Expert Insights on Strategic Business Development
                    </h3>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="h-6 bg-gray-100 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 h-64">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-600 rounded mr-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">FC</span>
                      </div>
                      <span className="font-bold text-sm">Fast Company</span>
                    </div>
                    <h3 className="font-bold text-xs mb-2 leading-tight">
                      Innovation Story: Transforming Industry Standards
                    </h3>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
