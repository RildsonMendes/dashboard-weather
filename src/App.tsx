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

  // Função temporária para simular a busca até integrarmos com a API real
  const handleSearch = (city: string) => {
    setWeatherData({
      cityName: city,
      temperature: 25,
      humidity: 60,
      description: 'parcialmente nublado'
    });
  };

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Dashboard de Clima</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard data={weatherData} />
      </div>
    </main>
  );
}

export default App;