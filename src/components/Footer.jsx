const Footer = () => {
    return (
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} Team SYNCHRONIX. Department of Electronics and Telecommunication Engineering, University of Moratuwa.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;