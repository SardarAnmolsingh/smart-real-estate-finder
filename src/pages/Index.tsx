
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, Clock, Home } from "lucide-react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";

const Index = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const features = [
    {
      icon: <BarChart2 size={32} className="text-real-blue" />,
      title: "AI Price Comparison",
      description: "Our AI analyzes thousands of property listings to suggest the best possible price for your next purchase."
    },
    {
      icon: <Clock size={32} className="text-real-blue" />,
      title: "Best Time to Buy",
      description: "Get insights into market trends and find the perfect timing to make your investment when prices are lowest."
    },
    {
      icon: <Home size={32} className="text-real-blue" />,
      title: "Residential & Commercial",
      description: "Browse through a wide selection of both residential and commercial properties with detailed analysis."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Find the Best Property Deals Using AI & Big Data
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-50">
                Get smarter real estate recommendations with our AI-powered price analysis and market trend predictions.
              </p>
              
              <div 
                className={`max-w-2xl mx-auto transition-all duration-300 transform ${
                  isSearchFocused ? "scale-105" : ""
                }`}
              >
                <SearchBar 
                  className="shadow-lg"
                  autoFocus={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">How Our AI Helps You Find Better Deals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover-scale">
                  <div className="bg-real-blue-light p-3 rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-real-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link to="/search" className="btn-primary inline-flex items-center">
                Start Exploring <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-real-gray-100">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
                <p className="text-real-gray-600 text-lg max-w-2xl mx-auto">
                  Our AI-powered platform analyzes real estate trends and predicts the best time to buy, helping you save money on your investment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/search" className="btn-primary text-center">
                  Search Properties
                </Link>
                <Link to="/about" className="btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
