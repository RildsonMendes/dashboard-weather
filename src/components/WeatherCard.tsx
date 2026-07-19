import React from 'react';

interface WeatherData {
  cityName: string;
  temperature: number;
  humidity: number;
  description: string;
}

interface WeatherCardProps {
  data: WeatherData | null;
  isFavorite: boolean;
  onToggleFavorite: (cityName: string) => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data, isFavorite, onToggleFavorite }) => {
  if (!data) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>
        <p>Busque uma cidade para ver o clima.</p>
      </div>
    );
  }

  return (
    <article 
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '350px',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}
      aria-label={`Clima em ${data.cityName}`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '24px', color: '#1e293b' }}>
          {data.cityName}
        </h2>
        <button
          onClick={() => onToggleFavorite(data.cityName)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            padding: '5px'
          }}
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      
      <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '10px 0', color: '#0f172a' }}>
        {Math.round(data.temperature)}°C
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', color: '#475569' }}>
        <p style={{ margin: 0, textTransform: 'capitalize' }}>
          <strong>Condição:</strong> {data.description}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Umidade:</strong> {data.humidity}%
        </p>
      </div>
    </article>
  );
};