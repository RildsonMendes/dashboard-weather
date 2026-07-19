import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';

interface WeatherData {
  cityName: string;
  temperature: number;
  humidity: number;
  description: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSearch = (city: string) => {
    setWeatherData({
      cityName: city,
      temperature: 25,
      humidity: 60,
      description: 'parcialmente nublado'
    });
    setIsFavorite(false);
  };

  const handleToggleFavorite = (city: string) => {
    setIsFavorite(!isFavorite);
  };

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Dashboard de Clima</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard 
          data={weatherData} 
          isFavorite={isFavorite} 
          onToggleFavorite={handleToggleFavorite} 
        />
      </div>
    </main>
  );
}

export default App;