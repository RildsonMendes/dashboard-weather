import { render, screen } from '@testing-library/react';
import { WeatherCard } from '../components/WeatherCard';

describe('WeatherCard Component - UC02', () => {
  const mockWeatherData = {
    cityName: 'Manaus',
    temperature: 28.4,
    humidity: 75,
    description: 'céu limpo',
  };

  test('CT02.1: Renderização Correta dos Dados Climáticos', () => {
  render(<WeatherCard data={mockWeatherData} isFavorite={false} onToggleFavorite={() => {}} />);

  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Manaus');
  expect(screen.getByText('28°C')).toBeInTheDocument();
  expect(screen.getByText(/céu limpo/i)).toBeInTheDocument();
  expect(screen.getByText(/75%/)).toBeInTheDocument();
});

  test('CT02.2: Estado Inicial Sem Dados', () => {
    render(<WeatherCard data={null} isFavorite={false} onToggleFavorite={() => {}} />);

    expect(screen.getByText('Busque uma cidade para ver o clima.')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });
});