
export interface PropertyType {
  id: string;
  name: string;
  type: 'residential' | 'commercial';
  image: string;
  address: string;
  city: string;
  marketPrice: number;
  suggestedPrice: number;
  pricePerSqFt: number;
  sqft: number;
  bedrooms?: number;
  bathrooms?: number;
  yearBuilt: number;
  trend: 'rising' | 'dropping' | 'stable';
  trendPercentage: number;
  description: string;
  features: string[];
  priceHistory: Array<{
    date: string;
    price: number;
  }>;
}

export const properties: PropertyType[] = [
  {
    id: "1",
    name: "Modern Apartment in Indiranagar",
    type: "residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "45, 12th Main, Indiranagar",
    city: "Bangalore",
    marketPrice: 9500000,
    suggestedPrice: 9200000,
    pricePerSqFt: 12000,
    sqft: 800,
    bedrooms: 2,
    bathrooms: 2,
    yearBuilt: 2019,
    trend: "dropping",
    trendPercentage: 3.5,
    description: "Stylish modern apartment in upscale Indiranagar with contemporary amenities, floor-to-ceiling windows, and beautiful city views. This corner unit features an open floor plan and premium finishes throughout.",
    features: ["24/7 Security", "Elevator", "Gym", "Terrace Garden", "Power Backup", "Covered Parking"],
    priceHistory: [
      { date: "2023-03", price: 9800000 },
      { date: "2023-06", price: 9700000 },
      { date: "2023-09", price: 9600000 },
      { date: "2023-12", price: 9500000 },
      { date: "2024-01", price: 9500000 },
      { date: "2024-02", price: 9500000 },
      { date: "2024-03", price: 9500000 },
    ]
  },
  {
    id: "2",
    name: "Villa in Koramangala",
    type: "residential",
    image: "https://images.unsplash.com/photo-1564013434775-f71db0030976?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "23/A, 4th Block, Koramangala",
    city: "Bangalore",
    marketPrice: 25000000,
    suggestedPrice: 23900000,
    pricePerSqFt: 18000,
    sqft: 1400,
    bedrooms: 4,
    bathrooms: 4.5,
    yearBuilt: 2017,
    trend: "dropping",
    trendPercentage: 4.8,
    description: "Luxurious villa in the heart of Koramangala with premium finishes, a modern kitchen, and a beautiful garden. Perfect for families looking for space and comfort in a prestigious neighborhood.",
    features: ["Swimming Pool", "Home Office", "Modular Kitchen", "Smart Home", "Private Garden", "Double Garage"],
    priceHistory: [
      { date: "2023-03", price: 26000000 },
      { date: "2023-06", price: 25500000 },
      { date: "2023-09", price: 25300000 },
      { date: "2023-12", price: 25000000 },
      { date: "2024-01", price: 25000000 },
      { date: "2024-02", price: 25000000 },
      { date: "2024-03", price: 25000000 },
    ]
  },
  {
    id: "3",
    name: "Premium Office Space in Cyber City",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&q=80&w=1469&auto=format&fit=crop",
    address: "Tower 4, DLF Cyber City",
    city: "Gurgaon",
    marketPrice: 45000000,
    suggestedPrice: 48000000,
    pricePerSqFt: 14000,
    sqft: 3200,
    yearBuilt: 2018,
    trend: "rising",
    trendPercentage: 6.2,
    description: "Prime office space in the heart of Cyber City with modern design, open workspace concepts, and state-of-the-art meeting facilities. Excellent connectivity to Delhi and airport.",
    features: ["24/7 Security", "Conference Rooms", "Cafeteria", "Reception Area", "Server Room", "Multi-level Parking"],
    priceHistory: [
      { date: "2023-03", price: 43500000 },
      { date: "2023-06", price: 44000000 },
      { date: "2023-09", price: 44500000 },
      { date: "2023-12", price: 45000000 },
      { date: "2024-01", price: 45000000 },
      { date: "2024-02", price: 45000000 },
      { date: "2024-03", price: 45000000 },
    ]
  },
  {
    id: "4",
    name: "Modern Flat in Powai",
    type: "residential",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop",
    address: "E-304, Hiranandani Gardens",
    city: "Mumbai",
    marketPrice: 18500000,
    suggestedPrice: 17900000,
    pricePerSqFt: 28000,
    sqft: 650,
    bedrooms: 2,
    bathrooms: 2.5,
    yearBuilt: 2020,
    trend: "dropping",
    trendPercentage: 2.1,
    description: "Modern flat in Powai with floor-to-ceiling windows offering breathtaking lake views. Features include premium appliances and luxury finishes throughout.",
    features: ["Lake View", "Balcony", "Concierge", "Fitness Center", "Underground Parking", "Children's Play Area"],
    priceHistory: [
      { date: "2023-03", price: 18900000 },
      { date: "2023-06", price: 18700000 },
      { date: "2023-09", price: 18500000 },
      { date: "2023-12", price: 18500000 },
      { date: "2024-01", price: 18500000 },
      { date: "2024-02", price: 18500000 },
      { date: "2024-03", price: 18500000 },
    ]
  },
  {
    id: "5",
    name: "Retail Space in Connaught Place",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&q=80&w=1558&auto=format&fit=crop",
    address: "Block N, Middle Circle, CP",
    city: "New Delhi",
    marketPrice: 65000000,
    suggestedPrice: 68000000,
    pricePerSqFt: 55000,
    sqft: 1200,
    yearBuilt: 2016,
    trend: "rising",
    trendPercentage: 5.7,
    description: "Prime retail space in the iconic Connaught Place with excellent visibility, large display windows, and modern infrastructure. Perfect for luxury retail businesses with high footfall.",
    features: ["High Foot Traffic", "Corner Location", "Storage Area", "Security System", "Large Display Windows", "Metro Connectivity"],
    priceHistory: [
      { date: "2023-03", price: 62000000 },
      { date: "2023-06", price: 63000000 },
      { date: "2023-09", price: 64000000 },
      { date: "2023-12", price: 65000000 },
      { date: "2024-01", price: 65000000 },
      { date: "2024-02", price: 65000000 },
      { date: "2024-03", price: 65000000 },
    ]
  },
  {
    id: "6",
    name: "Heritage Haveli",
    type: "residential",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&q=80&w=1471&auto=format&fit=crop",
    address: "42, Gangaur Ghat Road",
    city: "Udaipur",
    marketPrice: 32000000,
    suggestedPrice: 31500000,
    pricePerSqFt: 22000,
    sqft: 1450,
    bedrooms: 3,
    bathrooms: 3.5,
    yearBuilt: 1920,
    trend: "stable",
    trendPercentage: 0.5,
    description: "Beautifully restored heritage haveli with original architectural details and modern updates. Features include traditional Rajasthani elements, high ceilings, and a private courtyard with lake views.",
    features: ["Lake View", "Traditional Architecture", "Courtyard", "Renovated Kitchen", "Terrace", "Ornate Details"],
    priceHistory: [
      { date: "2023-03", price: 31800000 },
      { date: "2023-06", price: 31800000 },
      { date: "2023-09", price: 32000000 },
      { date: "2023-12", price: 32000000 },
      { date: "2024-01", price: 32000000 },
      { date: "2024-02", price: 32000000 },
      { date: "2024-03", price: 32000000 },
    ]
  },
  {
    id: "7",
    name: "Industrial Space in MIDC",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "Plot 38, Phase 2, MIDC",
    city: "Pune",
    marketPrice: 78000000,
    suggestedPrice: 82000000,
    pricePerSqFt: 7800,
    sqft: 10000,
    yearBuilt: 2014,
    trend: "rising",
    trendPercentage: 7.1,
    description: "Modern industrial space in MIDC with high ceilings, loading docks, and ample parking. Ideal for manufacturing, distribution, or conversion to a trendy workspace.",
    features: ["Loading Docks", "High Ceilings", "Office Space", "24x7 Water Supply", "Security System", "Truck Access"],
    priceHistory: [
      { date: "2023-03", price: 74000000 },
      { date: "2023-06", price: 75000000 },
      { date: "2023-09", price: 77000000 },
      { date: "2023-12", price: 78000000 },
      { date: "2024-01", price: 78000000 },
      { date: "2024-02", price: 78000000 },
      { date: "2024-03", price: 78000000 },
    ]
  },
  {
    id: "8",
    name: "Mountain View Villa in Shimla",
    type: "residential",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "Cedar Ridge Estate, Mall Road",
    city: "Shimla",
    marketPrice: 15500000,
    suggestedPrice: 15100000,
    pricePerSqFt: 12000,
    sqft: 1300,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2015,
    trend: "dropping",
    trendPercentage: 2.3,
    description: "Charming mountain villa with stunning Himalayan views, vaulted ceilings, and a wrap-around deck. Perfect as a primary residence or vacation home in a peaceful natural setting.",
    features: ["Mountain Views", "Wrap-around Deck", "Fireplace", "Open Floor Plan", "Hiking Trails", "Garden"],
    priceHistory: [
      { date: "2023-03", price: 15800000 },
      { date: "2023-06", price: 15700000 },
      { date: "2023-09", price: 15600000 },
      { date: "2023-12", price: 15500000 },
      { date: "2024-01", price: 15500000 },
      { date: "2024-02", price: 15500000 },
      { date: "2024-03", price: 15500000 },
    ]
  }
];

export const cities = [
  "Mumbai", 
  "Delhi", 
  "Bangalore", 
  "Hyderabad", 
  "Chennai", 
  "Kolkata", 
  "Pune", 
  "Jaipur",
  "Ahmedabad",
  "Kochi",
  "Gurgaon",
  "Noida",
  "Chandigarh",
  "Lucknow"
];
