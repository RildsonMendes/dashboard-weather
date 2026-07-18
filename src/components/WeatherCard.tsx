import React from 'react';

interface WeatherData {
  cityName: string;
  temperature: number;
  humidity: number;
  description: string;
}

interface WeatherCardProps {
  data: WeatherData | null;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
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
      <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#1e293b' }}>
        {data.cityName}
      </h2>
      
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