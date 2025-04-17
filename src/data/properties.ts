
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
    name: "Modern Downtown Apartment",
    type: "residential",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop",
    address: "123 Main Street",
    city: "New York",
    marketPrice: 750000,
    suggestedPrice: 720000,
    pricePerSqFt: 750,
    sqft: 1000,
    bedrooms: 2,
    bathrooms: 2,
    yearBuilt: 2018,
    trend: "dropping",
    trendPercentage: 3.5,
    description: "Stylish downtown apartment with modern amenities, floor-to-ceiling windows, and breathtaking city views. This corner unit features an open floor plan and high-end finishes throughout.",
    features: ["Doorman", "Elevator", "Gym", "Rooftop Terrace", "In-unit Laundry", "Central AC"],
    priceHistory: [
      { date: "2023-03", price: 780000 },
      { date: "2023-06", price: 775000 },
      { date: "2023-09", price: 760000 },
      { date: "2023-12", price: 750000 },
      { date: "2024-01", price: 750000 },
      { date: "2024-02", price: 750000 },
      { date: "2024-03", price: 750000 },
    ]
  },
  {
    id: "2",
    name: "Luxury Suburban Villa",
    type: "residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "456 Oak Avenue",
    city: "Boston",
    marketPrice: 1250000,
    suggestedPrice: 1190000,
    pricePerSqFt: 550,
    sqft: 2300,
    bedrooms: 4,
    bathrooms: 3.5,
    yearBuilt: 2015,
    trend: "dropping",
    trendPercentage: 4.8,
    description: "Spacious suburban villa with premium finishes, a gourmet kitchen, and a large backyard. Perfect for families looking for space and comfort in a prestigious neighborhood.",
    features: ["Swimming Pool", "Home Office", "Fireplace", "Smart Home", "Garage", "Garden"],
    priceHistory: [
      { date: "2023-03", price: 1300000 },
      { date: "2023-06", price: 1280000 },
      { date: "2023-09", price: 1265000 },
      { date: "2023-12", price: 1250000 },
      { date: "2024-01", price: 1250000 },
      { date: "2024-02", price: 1250000 },
      { date: "2024-03", price: 1250000 },
    ]
  },
  {
    id: "3",
    name: "City View Office Space",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&q=80&w=1469&auto=format&fit=crop",
    address: "789 Business Park",
    city: "Chicago",
    marketPrice: 2500000,
    suggestedPrice: 2650000,
    pricePerSqFt: 350,
    sqft: 7200,
    yearBuilt: 2017,
    trend: "rising",
    trendPercentage: 6.2,
    description: "Prime office space in the heart of the business district with stunning city views. Features modern design, open workspace concepts, and state-of-the-art meeting facilities.",
    features: ["24/7 Security", "Conference Rooms", "Kitchen", "Reception Area", "Server Room", "Parking"],
    priceHistory: [
      { date: "2023-03", price: 2350000 },
      { date: "2023-06", price: 2400000 },
      { date: "2023-09", price: 2450000 },
      { date: "2023-12", price: 2500000 },
      { date: "2024-01", price: 2500000 },
      { date: "2024-02", price: 2500000 },
      { date: "2024-03", price: 2500000 },
    ]
  },
  {
    id: "4",
    name: "Riverfront Condo",
    type: "residential",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&q=80&w=1474&auto=format&fit=crop",
    address: "101 River Road",
    city: "Austin",
    marketPrice: 580000,
    suggestedPrice: 560000,
    pricePerSqFt: 620,
    sqft: 940,
    bedrooms: 1,
    bathrooms: 1.5,
    yearBuilt: 2019,
    trend: "dropping",
    trendPercentage: 2.1,
    description: "Modern riverside condo with floor-to-ceiling windows offering breathtaking water views. Features include high-end appliances and luxury finishes throughout.",
    features: ["Riverside View", "Balcony", "Concierge", "Fitness Center", "Underground Parking", "Pet Friendly"],
    priceHistory: [
      { date: "2023-03", price: 590000 },
      { date: "2023-06", price: 585000 },
      { date: "2023-09", price: 580000 },
      { date: "2023-12", price: 580000 },
      { date: "2024-01", price: 580000 },
      { date: "2024-02", price: 580000 },
      { date: "2024-03", price: 580000 },
    ]
  },
  {
    id: "5",
    name: "Retail Space in Shopping District",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "555 Commerce Ave",
    city: "San Francisco",
    marketPrice: 1750000,
    suggestedPrice: 1850000,
    pricePerSqFt: 950,
    sqft: 1850,
    yearBuilt: 2016,
    trend: "rising",
    trendPercentage: 5.7,
    description: "Prime retail space in a high-traffic shopping district. Excellent visibility, large display windows, and modern infrastructure make this perfect for upscale retail businesses.",
    features: ["High Foot Traffic", "Corner Location", "Storage Area", "Security System", "Large Display Windows", "Loading Dock"],
    priceHistory: [
      { date: "2023-03", price: 1650000 },
      { date: "2023-06", price: 1680000 },
      { date: "2023-09", price: 1720000 },
      { date: "2023-12", price: 1750000 },
      { date: "2024-01", price: 1750000 },
      { date: "2024-02", price: 1750000 },
      { date: "2024-03", price: 1750000 },
    ]
  },
  {
    id: "6",
    name: "Historic Townhouse",
    type: "residential",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "222 Heritage Lane",
    city: "Philadelphia",
    marketPrice: 950000,
    suggestedPrice: 930000,
    pricePerSqFt: 480,
    sqft: 1980,
    bedrooms: 3,
    bathrooms: 2.5,
    yearBuilt: 1920,
    trend: "stable",
    trendPercentage: 0.5,
    description: "Beautifully restored historic townhouse with original architectural details and modern updates. Features include hardwood floors, high ceilings, and a private courtyard.",
    features: ["Original Hardwood", "Crown Molding", "Fireplace", "Renovated Kitchen", "Courtyard", "Wine Cellar"],
    priceHistory: [
      { date: "2023-03", price: 945000 },
      { date: "2023-06", price: 945000 },
      { date: "2023-09", price: 950000 },
      { date: "2023-12", price: 950000 },
      { date: "2024-01", price: 950000 },
      { date: "2024-02", price: 950000 },
      { date: "2024-03", price: 950000 },
    ]
  },
  {
    id: "7",
    name: "Industrial Warehouse",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "888 Industrial Pkwy",
    city: "Seattle",
    marketPrice: 3200000,
    suggestedPrice: 3400000,
    pricePerSqFt: 200,
    sqft: 16000,
    yearBuilt: 2010,
    trend: "rising",
    trendPercentage: 7.1,
    description: "Modern industrial warehouse with high ceilings, loading docks, and ample parking. Ideal for manufacturing, distribution, or conversion to a trendy workspace.",
    features: ["Loading Docks", "High Ceilings", "Office Space", "Climate Control", "Security System", "Truck Access"],
    priceHistory: [
      { date: "2023-03", price: 2950000 },
      { date: "2023-06", price: 3050000 },
      { date: "2023-09", price: 3150000 },
      { date: "2023-12", price: 3200000 },
      { date: "2024-01", price: 3200000 },
      { date: "2024-02", price: 3200000 },
      { date: "2024-03", price: 3200000 },
    ]
  },
  {
    id: "8",
    name: "Mountain View Cabin",
    type: "residential",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop",
    address: "444 Summit Road",
    city: "Denver",
    marketPrice: 650000,
    suggestedPrice: 635000,
    pricePerSqFt: 430,
    sqft: 1500,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2012,
    trend: "dropping",
    trendPercentage: 2.3,
    description: "Charming mountain cabin with stunning views, vaulted ceilings, and a wrap-around deck. Perfect as a primary residence or vacation home in a peaceful natural setting.",
    features: ["Mountain Views", "Wrap-around Deck", "Stone Fireplace", "Open Floor Plan", "Hiking Trails", "Hot Tub"],
    priceHistory: [
      { date: "2023-03", price: 665000 },
      { date: "2023-06", price: 660000 },
      { date: "2023-09", price: 655000 },
      { date: "2023-12", price: 650000 },
      { date: "2024-01", price: 650000 },
      { date: "2024-02", price: 650000 },
      { date: "2024-03", price: 650000 },
    ]
  }
];

export const cities = [
  "New York", 
  "Boston", 
  "Chicago", 
  "Austin", 
  "San Francisco", 
  "Philadelphia", 
  "Seattle", 
  "Denver",
  "Miami",
  "Los Angeles",
  "Portland",
  "Nashville",
  "Atlanta",
  "Dallas"
];
