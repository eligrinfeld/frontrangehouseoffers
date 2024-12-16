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
        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Front Range House Offers?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fast & Fair Offers</h3>
              <p className="text-gray-600">Get a cash offer for your house in as little as 24 hours. No waiting, no hassle.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">No Repairs Needed</h3>
              <p className="text-gray-600">Sell your house as-is. We handle all repairs and renovations.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Local Experts</h3>
              <p className="text-gray-600">We know the Colorado market and provide personalized solutions.</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Get Your Cash Offer Today</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>7900 E Union Ave</p>
              <p>Denver, CO 80237</p>
              <p className="mt-2">Phone: (720) 943-4153</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Areas We Serve</h3>
              <p>Denver Metro Area, Colorado Springs, Fort Collins, and surrounding areas in Colorado.</p>
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