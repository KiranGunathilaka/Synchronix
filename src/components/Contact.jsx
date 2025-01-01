import { Mail, Phone, Globe } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get in touch with Team SYNCHRONIX
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="space-y-8">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-green-600" />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Email</p>
                <a href="mailto:jayakodykavishka@gmail.com" className="text-gray-500 hover:text-gray-600">
                  jayakodykavishka@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="h-6 w-6 text-green-600" />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Phone</p>
                <a href="tel:+94705227915" className="text-gray-500 hover:text-gray-600">
                  +94 70 522 7915
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <Globe className="h-6 w-6 text-green-600" />
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">Website</p>
                <a href="https://ent.uom.lk/spark/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
                  https://ent.uom.lk/spark/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;