import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Front Range House Offers?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Swift, Fair Process</h3>
              <p className="text-gray-600">Receive a competitive cash offer within 24 hours. Our streamlined process eliminates the typical delays associated with traditional home sales.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sell As-Is</h3>
              <p className="text-gray-600">No need for repairs or renovations. We purchase properties in any condition, saving you time and money on improvements.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Local Market Experts</h3>
              <p className="text-gray-600">With deep knowledge of the Colorado real estate market, we provide solutions tailored to your specific situation.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Simple Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">1</div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">Submit your property information through our secure form</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <h3 className="font-semibold mb-2">Get Your Offer</h3>
              <p className="text-gray-600">Receive a fair cash offer within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <h3 className="font-semibold mb-2">Choose Your Timeline</h3>
              <p className="text-gray-600">Select a closing date that works best for you</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">4</div>
              <h3 className="font-semibold mb-2">Close With Confidence</h3>
              <p className="text-gray-600">Close at a reputable title company and get your cash</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Get Your Cash Offer Today</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>7900 E Union Ave</p>
              <p>Denver, CO 80237</p>
              <p className="mt-2">Phone: (720) 943-4153</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Service Areas</h3>
              <p>Proudly serving the Denver Metro Area, Colorado Springs, Fort Collins, and surrounding areas throughout Colorado.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Front Range House Offers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;