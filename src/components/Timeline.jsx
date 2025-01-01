const timelineData = [
    {
      phase: "Project Initiation and Problem Definition",
      duration: "21/12/2024 – 31/01/2025",
      activities: [
        "Meeting with industries and field visits",
        "Detailed problem analysis and scope definition"
      ]
    },
    {
      phase: "Research and Planning",
      duration: "01/02/2025 – 31/03/2025",
      activities: [
        "Data collection and analysis",
        "Study of existing solutions",
        "Creation of a detailed project plan and methodology"
      ]
    },
    {
      phase: "Design and Development",
      duration: "01/04/2025 – 31/07/2025",
      activities: [
        "Conceptual design of the solution",
        "Preliminary testing and validation",
        "Refinement based on industry partner/customers",
        "Development of Prototype"
      ]
    },
    {
      phase: "Implementation and Testing",
      duration: "01/08/2025 – 30/09/2025",
      activities: [
        "Finalizing the Minimum Viable Product",
        "Testing in actual conditions",
        "Documentation of results and performance metrics",
        "Refinement based on test results"
      ]
    }
  ];
  
  const Timeline = () => {
    return (
      <section id="timeline" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Project Timeline
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our structured approach to project delivery
            </p>
          </div>
  
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pb-12">
                {index !== timelineData.length - 1 && (
                  <div className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                )}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0">
                    <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-green-600 rounded-full">
                      <span className="text-white">{index + 1}</span>
                    </div>
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <div className="relative">
                      <h3 className="text-xl font-bold text-gray-900">{item.phase}</h3>
                      <p className="mt-1 text-sm text-green-600">{item.duration}</p>
                    </div>
                    <div className="mt-2 text-gray-600">
                      <ul className="list-disc ml-5 space-y-1">
                        {item.activities.map((activity, actIndex) => (
                          <li key={actIndex}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Timeline;