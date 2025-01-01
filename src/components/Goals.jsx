const goals = [
    {
      title: "Provide a Commercially Viable Engineering Solution",
      description: "Develop an innovative electronics-focused solution to address climate change, aligned with Sustainable Development Goals (SDGs).",
      percentage: 50
    },
    {
      title: "Explore Startup and Collaboration Opportunities",
      description: "Assess the potential for scaling our solution into a startup or collaborating with industrial leaders to make a meaningful real-world impact.",
      percentage: 40
    },
    {
      title: "Gain Professional Exposure",
      description: "Build experience working with investors and stakeholders while developing an understanding of industrial trends and requirements.",
      percentage: 10
    }
  ]
  
  const Goals = () => {
    return (
      <section id="goals" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Goals</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We aim to create impactful solutions while growing professionally.
            </p>
          </div>
  
          <div className="mt-16">
            <div className="space-y-12">
              {goals.map((goal, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900">{goal.title}</h3>
                      <span className="text-2xl font-bold text-green-600">{goal.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${goal.percentage}%` }}
                      ></div>
                    </div>
                    <p className="mt-4 text-gray-500">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Goals