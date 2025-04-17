
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { cities } from "@/data/properties";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  showButton?: boolean;
  autoFocus?: boolean;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ 
  className = "", 
  placeholder = "Enter city or area...",
  showButton = true,
  autoFocus = false,
  onSearch
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      const filtered = cities.filter(city => 
        city.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/search?query=${encodeURIComponent(query)}`);
      }
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(suggestion);
    } else {
      navigate(`/search?query=${encodeURIComponent(suggestion)}`);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query && setShowSuggestions(true)}
            autoFocus={autoFocus}
            className="w-full px-4 py-3 pl-12 rounded-l-lg border border-r-0 border-real-gray-300 focus:outline-none focus:border-real-blue focus:ring-1 focus:ring-real-blue"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-real-gray-400" size={18} />
        </div>
        {showButton && (
          <button
            onClick={handleSearch}
            className="bg-real-blue text-white px-6 py-3 rounded-r-lg font-medium hover:bg-real-blue-dark transition-colors"
          >
            Search
          </button>
        )}
      </div>
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div 
          className="absolute z-10 w-full bg-white shadow-lg rounded-lg mt-1 overflow-hidden max-h-60 overflow-y-auto"
          onBlur={() => setShowSuggestions(false)}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-real-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
