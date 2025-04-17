
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { PropertyType } from "@/data/properties";

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderTrendIcon = () => {
    if (property.trend === "rising") {
      return (
        <div className="inline-flex items-center text-red-600 font-medium">
          <TrendingUp size={20} className="mr-1" /> 
          <span>Prices rising {property.trendPercentage}%</span>
        </div>
      );
    } else if (property.trend === "dropping") {
      return (
        <div className="inline-flex items-center text-green-600 font-medium">
          <TrendingDown size={20} className="mr-1" /> 
          <span>Prices dropping {property.trendPercentage}%</span>
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center text-gray-600 font-medium">
          <Minus size={20} className="mr-1" /> 
          <span>Prices stable</span>
        </div>
      );
    }
  };

  const isPriceBelowMarket = property.suggestedPrice < property.marketPrice;

  return (
    <Link to={`/property/${property.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale card-shadow h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded text-xs font-semibold uppercase text-real-gray-700">
            {property.type}
          </div>
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-real-gray-900 mb-1">{property.name}</h3>
          </div>
          <p className="text-real-gray-600 text-sm mb-4">
            {property.address}, {property.city}
          </p>

          <div className="flex flex-col space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-real-gray-600">Market Price:</span>
              <span className="font-medium">{formatPrice(property.marketPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className={isPriceBelowMarket ? "text-green-600 font-medium" : "text-real-gray-600"}>
                AI Suggested Price:
              </span>
              <span className={`font-semibold ${isPriceBelowMarket ? "text-green-600" : ""}`}>
                {formatPrice(property.suggestedPrice)}
              </span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center">
              <div className="text-sm">{renderTrendIcon()}</div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {property.type === 'residential' && (
                <>
                  <div className="bg-real-gray-100 rounded-full py-1 px-3 text-xs text-real-gray-700">
                    {property.bedrooms} Beds
                  </div>
                  <div className="bg-real-gray-100 rounded-full py-1 px-3 text-xs text-real-gray-700">
                    {property.bathrooms} Baths
                  </div>
                </>
              )}
              <div className="bg-real-gray-100 rounded-full py-1 px-3 text-xs text-real-gray-700">
                {property.sqft.toLocaleString()} sqft
              </div>
              <div className="bg-real-gray-100 rounded-full py-1 px-3 text-xs text-real-gray-700">
                Built {property.yearBuilt}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-real-gray-50 px-5 py-3">
          {isPriceBelowMarket ? (
            <div className="text-center text-green-600 font-medium">
              Save {formatPrice(property.marketPrice - property.suggestedPrice)}
            </div>
          ) : (
            <div className="text-center text-real-gray-600 font-medium">
              Expected to increase in value
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
