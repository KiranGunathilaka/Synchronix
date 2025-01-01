const Hero = () => {
    return (
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    Team SYNCHRONIX
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    A team of five Electronic and Telecommunication Engineering undergraduates from the University of Moratuwa, 
                    seeking to develop innovative solutions that address climate change and align with Sustainable Development Goals.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/api/placeholder/800/600"
                  alt="Team Synchronix working together"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero