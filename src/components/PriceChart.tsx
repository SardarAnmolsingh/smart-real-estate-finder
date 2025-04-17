
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from "recharts";

interface PriceHistoryItem {
  date: string;
  price: number;
}

interface ChartDataItem {
  date: string;
  price: number | null;
  formattedDate: string;
  projected?: boolean;
}

interface PriceChartProps {
  priceHistory: PriceHistoryItem[];
  suggestedPrice: number;
  dark?: boolean;
}

const PriceChart = ({ priceHistory, suggestedPrice, dark = false }: PriceChartProps) => {
  const [formattedData, setFormattedData] = useState<ChartDataItem[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  
  // Format dates and calculate min/max prices for the chart
  useEffect(() => {
    // Format historical data
    const formatted: ChartDataItem[] = priceHistory.map(item => ({
      date: item.date,
      price: item.price,
      formattedDate: new Date(item.date).toLocaleDateString('en-US', { 
        month: 'short',
        year: '2-digit'
      })
    }));
    
    // Calculate future projections
    const lastDate = new Date(priceHistory[priceHistory.length - 1].date);
    
    // Add projection points
    for (let i = 1; i <= 3; i++) {
      const projectionDate = new Date(lastDate);
      projectionDate.setMonth(lastDate.getMonth() + i);
      
      const projectionPoint: ChartDataItem = {
        date: projectionDate.toISOString().substring(0, 7),
        price: i === 3 ? suggestedPrice : null,
        formattedDate: projectionDate.toLocaleDateString('en-US', { 
          month: 'short',
          year: '2-digit'
        }),
        projected: true
      };
      
      formatted.push(projectionPoint);
    }

    // Calculate min and max for y-axis
    const allPrices = priceHistory.map(item => item.price);
    allPrices.push(suggestedPrice);
    
    const min = Math.floor(Math.min(...allPrices) * 0.95);
    const max = Math.ceil(Math.max(...allPrices) * 1.05);
    
    setFormattedData(formatted);
    setMinPrice(min);
    setMaxPrice(max);
  }, [priceHistory, suggestedPrice]);

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value}`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className={`p-3 rounded shadow-md ${dark ? 'bg-gray-800 text-white' : 'bg-white'}`}>
          <p className="font-semibold">{label}</p>
          {data.price !== null && (
            <p className={`${dark ? 'text-blue-300' : 'text-real-blue'} font-medium`}>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }).format(data.price)}
            </p>
          )}
          {data.projected && <p className="text-sm text-gray-500 mt-1">Projected</p>}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={dark ? "#475569" : "#e5e7eb"} />
          <XAxis 
            dataKey="formattedDate"
            tick={{ fill: dark ? "#cbd5e1" : "#6b7280" }}
          />
          <YAxis 
            domain={[minPrice, maxPrice]} 
            tickFormatter={formatYAxis}
            tick={{ fill: dark ? "#cbd5e1" : "#6b7280" }}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Historical solid line */}
          <Line
            type="monotone"
            dataKey="price"
            stroke={dark ? "#60a5fa" : "#3b82f6"}
            strokeWidth={2}
            activeDot={{ r: 8, fill: dark ? "#2563eb" : "#1d4ed8" }}
            dot={{ r: 4 }}
          />
          
          {/* Reference line for suggested price */}
          <ReferenceLine 
            y={suggestedPrice} 
            stroke={dark ? "#22c55e" : "#16a34a"} 
            strokeDasharray="3 3"
          >
            <Label 
              value="AI Suggested Price" 
              position="insideBottomRight"
              fill={dark ? "#22c55e" : "#16a34a"}
            />
          </ReferenceLine>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
