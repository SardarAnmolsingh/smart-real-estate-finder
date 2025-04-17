
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { properties, PropertyType } from "@/data/properties";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const typeParam = searchParams.get("type") || "all";
  
  const [filteredProperties, setFilteredProperties] = useState<PropertyType[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("relevance");
  const [propertyType, setPropertyType] = useState(typeParam);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isLoading, setIsLoading] = useState(true);

  // Filter and sort properties
  useEffect(() => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      let results = [...properties];
      
      // Filter by query (city or address)
      if (query) {
        results = results.filter(
          (property) =>
            property.city.toLowerCase().includes(query.toLowerCase()) ||
            property.address.toLowerCase().includes(query.toLowerCase())
        );
      }

      // Filter by property type
      if (propertyType !== "all") {
        results = results.filter((property) => property.type === propertyType);
      }

      // Filter by price range
      if (priceRange.min) {
        results = results.filter(
          (property) => property.marketPrice >= Number(priceRange.min)
        );
      }
      if (priceRange.max) {
        results = results.filter(
          (property) => property.marketPrice <= Number(priceRange.max)
        );
      }

      // Sort results
      switch (sortOption) {
        case "price-asc":
          results.sort((a, b) => a.marketPrice - b.marketPrice);
          break;
        case "price-desc":
          results.sort((a, b) => b.marketPrice - a.marketPrice);
          break;
        case "best-deal":
          results.sort(
            (a, b) =>
              (b.marketPrice - b.suggestedPrice) / b.marketPrice -
              (a.marketPrice - a.suggestedPrice) / a.marketPrice
          );
          break;
        default:
          // Default sorting by relevance (no change)
          break;
      }

      setFilteredProperties(results);
      setIsLoading(false);
    }, 800);
  }, [query, propertyType, priceRange, sortOption]);

  const handleSearch = (newQuery: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("query", newQuery);
    setSearchParams(params);
  };

  const handleTypeChange = (type: string) => {
    setPropertyType(type);
    const params = new URLSearchParams(searchParams);
    if (type === "all") {
      params.delete("type");
    } else {
      params.set("type", type);
    }
    setSearchParams(params);
  };

  const handlePriceRangeChange = (key: "min" | "max", value: string) => {
    setPriceRange((prev) => ({ ...prev, [key]: value }));
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Search Bar */}
        <div className="bg-real-blue">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
              <SearchBar
                placeholder="Search by city or address..."
                showButton={true}
                className="shadow-lg"
                onSearch={handleSearch}
                autoFocus={false}
              />
            </div>
          </div>
        </div>

        {/* Filters and Search Results */}
        <div className="container mx-auto px-4 py-8">
          {/* Filters Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 sm:mb-0">
              {query ? `Properties in "${query}"` : "All Properties"}
              <span className="text-real-gray-500 ml-2 text-lg font-normal">
                ({filteredProperties.length} results)
              </span>
            </h1>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-real-gray-600 hover:text-real-blue"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filters
              <ChevronDown
                size={16}
                className={`ml-1 transform transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-real-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="flex space-x-2">
                    <button
                      className={`px-4 py-2 rounded-md ${
                        propertyType === "all"
                          ? "bg-real-blue text-white"
                          : "bg-real-gray-100 text-real-gray-800 hover:bg-real-gray-200"
                      }`}
                      onClick={() => handleTypeChange("all")}
                    >
                      All
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${
                        propertyType === "residential"
                          ? "bg-real-blue text-white"
                          : "bg-real-gray-100 text-real-gray-800 hover:bg-real-gray-200"
                      }`}
                      onClick={() => handleTypeChange("residential")}
                    >
                      Residential
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md ${
                        propertyType === "commercial"
                          ? "bg-real-blue text-white"
                          : "bg-real-gray-100 text-real-gray-800 hover:bg-real-gray-200"
                      }`}
                      onClick={() => handleTypeChange("commercial")}
                    >
                      Commercial
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-real-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) =>
                        handlePriceRangeChange("min", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-real-blue"
                    />
                    <span className="text-real-gray-500">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) =>
                        handlePriceRangeChange("max", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-real-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-real-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortOption}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-real-blue"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="best-deal">Best Price</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-real-blue"></div>
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-2">No properties found</h2>
              <p className="text-real-gray-600 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
                  setSearchParams({});
                  setPropertyType("all");
                  setPriceRange({ min: "", max: "" });
                  setSortOption("relevance");
                }}
                className="btn-primary"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
