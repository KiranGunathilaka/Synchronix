import robotImage from '../assets/robot_for_hero.jpg';
const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
          <svg
            viewBox="0 0 400 400"
            className="w-[24rem] h-[24rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#22c55e' }}/>
                <stop offset="100%" style={{ stopColor: '#16a34a' }}/>
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#gradient)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-24 pb-32">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Team SYNCHRONIX
                </h1>
                <p className="mt-6 text-xl text-gray-300">
                  A team of five Electronic and Telecommunication Engineering undergraduates from the University of Moratuwa, 
                  seeking to develop innovative solutions that address climate change and align with Sustainable Development Goals.
                </p>
                <div className="mt-8 flex gap-4">
                  <a
                    href="#contact"
                    className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#goals"
                    className="inline-flex px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-white hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={robotImage}
                  alt="Team Synchronix working together"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-gray-900/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero