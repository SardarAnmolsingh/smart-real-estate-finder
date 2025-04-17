
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Map, Calendar, Home, TrendingUp, TrendingDown, Minus, BarChart2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties, PropertyType } from "@/data/properties";
import PriceChart from "@/components/PriceChart";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundProperty = properties.find(p => p.id === id);
      setProperty(foundProperty || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderTrendIndicator = () => {
    if (!property) return null;
    
    if (property.trend === "rising") {
      return (
        <div className="inline-flex items-center text-red-600 font-medium">
          <TrendingUp size={24} className="mr-2" /> 
          <span>Prices rising {property.trendPercentage}%</span>
        </div>
      );
    } else if (property.trend === "dropping") {
      return (
        <div className="inline-flex items-center text-green-600 font-medium">
          <TrendingDown size={24} className="mr-2" /> 
          <span>Prices dropping {property.trendPercentage}%</span>
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center text-gray-600 font-medium">
          <Minus size={24} className="mr-2" /> 
          <span>Prices stable</span>
        </div>
      );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-real-blue"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold mb-6">Property Not Found</h1>
            <p className="mb-6 text-real-gray-600">The property you're looking for doesn't exist or has been removed.</p>
            <Link to="/search" className="btn-primary">
              Return to Search
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isPriceBelowMarket = property.suggestedPrice < property.marketPrice;
  const priceDifference = Math.abs(property.marketPrice - property.suggestedPrice);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/search" className="inline-flex items-center text-real-gray-600 hover:text-real-blue mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Search Results
          </Link>

          {/* Property Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.name}</h1>
            <p className="text-real-gray-600 mb-4">
              {property.address}, {property.city}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-block bg-real-blue-light text-real-blue-dark px-3 py-1 rounded-full text-sm font-medium">
                {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
              </span>
              {renderTrendIndicator()}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (Images) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Property Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-real-gray-600 mb-6">{property.description}</p>
                
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-real-blue rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Analysis Chart */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <BarChart2 size={24} className="text-real-blue mr-2" />
                  <h2 className="text-xl font-semibold">Price Trend Analysis</h2>
                </div>
                <PriceChart 
                  priceHistory={property.priceHistory} 
                  suggestedPrice={property.suggestedPrice} 
                />
              </div>
            </div>

            {/* Right Column (Property Details) */}
            <div>
              {/* Price Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Price Information</h2>
                  <div className="h-0.5 w-16 bg-real-blue mt-1"></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-real-gray-600 text-sm">Market Price</div>
                    <div className="text-2xl font-semibold">{formatPrice(property.marketPrice)}</div>
                  </div>
                  
                  <div>
                    <div className={`${isPriceBelowMarket ? "text-green-600" : "text-real-gray-600"} text-sm font-medium`}>
                      AI Suggested Price
                    </div>
                    <div className={`text-2xl font-semibold ${isPriceBelowMarket ? "text-green-600" : ""}`}>
                      {formatPrice(property.suggestedPrice)}
                    </div>
                  </div>
                  
                  {isPriceBelowMarket && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-md text-center">
                      <div className="text-green-700 font-medium">Potential Savings</div>
                      <div className="text-xl font-bold text-green-600">
                        {formatPrice(priceDifference)}
                      </div>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-real-gray-600 text-sm">Price per sq ft</div>
                    <div className="font-semibold">
                      {formatPrice(property.pricePerSqFt)} / sq ft
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Property Details</h2>
                  <div className="h-0.5 w-16 bg-real-blue mt-1"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Home size={18} className="text-real-gray-400 mr-3" />
                    <div>
                      <div className="text-real-gray-600 text-sm">Property Type</div>
                      <div className="font-medium">
                        {property.type === 'residential' ? 'Residential' : 'Commercial'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Map size={18} className="text-real-gray-400 mr-3" />
                    <div>
                      <div className="text-real-gray-600 text-sm">Total Area</div>
                      <div className="font-medium">{property.sqft.toLocaleString()} sq ft</div>
                    </div>
                  </div>
                  
                  {property.type === 'residential' && (
                    <>
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center text-real-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-real-gray-600 text-sm">Bedrooms</div>
                          <div className="font-medium">{property.bedrooms}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center text-real-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v2a1 1 0 01-1 1h-3v1h2a1 1 0 110 2h-6a1 1 0 110-2h2v-1H7a1 1 0 01-1-1V8H5a1 1 0 01-1-1V4a1 1 0 011-1h1V2zm2 0v1h6V2H7zm6 5V4H7v3h6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-real-gray-600 text-sm">Bathrooms</div>
                          <div className="font-medium">{property.bathrooms}</div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div className="flex items-center">
                    <Calendar size={18} className="text-real-gray-400 mr-3" />
                    <div>
                      <div className="text-real-gray-600 text-sm">Year Built</div>
                      <div className="font-medium">{property.yearBuilt}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-real-blue-light rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-real-blue-dark mb-2">
                  {isPriceBelowMarket ? 'Great Deal! Act Fast' : 'Interested in this property?'}
                </h3>
                <p className="text-real-gray-700 mb-4">
                  Contact us for more information or to schedule a viewing.
                </p>
                <button className="btn-primary w-full">Contact Agent</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
