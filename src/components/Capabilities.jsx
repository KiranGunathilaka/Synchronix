const capabilities = [
    {
      title: "Analog and Digital Circuit Design",
      description: "Expertise in designing and implementing circuits for sensors, amplifiers, filters, and mixed-signal applications."
    },
    {
      title: "Embedded Systems",
      description: "Experience in programming and integrating different micro-controllers, SoCs, and exposure to FPGAs."
    },
    {
      title: "Signal Processing",
      description: "Skills in analyzing, filtering, and interpreting complex signals, including audio, video, and biomedical data."
    },
    {
      title: "Computer Networking",
      description: "Knowledge of implementing networking systems according to standards & protocols (e.g., TCP/IP, Bluetooth, WiFi)"
    },
    {
      title: "PCB Design",
      description: "Expertise in schematic design, and multilayer PCB layouts."
    },
    {
      title: "IoT Systems",
      description: "Building scalable IoT ecosystems, integrating sensors, actuators, and secure communication protocols."
    },
    {
      title: "Robotics and Control",
      description: "Development of intelligent robotic systems with precise control mechanisms and autonomous navigation capabilities."
    },
    {
      title: "Machine Learning & CV",
      description: "Designing AI-driven solutions for predictive analytics, pattern recognition, and image/video analysis."
    }
  ];
  
  const Capabilities = () => {
    return (
      <section id="capabilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Technical Capabilities
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our multidisciplinary expertise across various domains
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Capabilities;