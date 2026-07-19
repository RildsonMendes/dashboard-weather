import { render, screen, fireEvent } from '@testing-library/react';
import { WeatherCard } from '../components/WeatherCard';

describe('WeatherCard Favoritar - UC03', () => {
  const mockWeatherData = {
    cityName: 'Manaus',
    temperature: 28,
    humidity: 75,
    description: 'céu limpo',
  };
  const mockToggleFavorite = jest.fn();

  beforeEach(() => {
    mockToggleFavorite.mockClear();
  });

  test('CT03.1: Disparar Função de Favoritar no Clique', () => {
    render(
      <WeatherCard 
        data={mockWeatherData} 
        isFavorite={false} 
        onToggleFavorite={mockToggleFavorite} 
      />
    );

    const favoriteButton = screen.getByRole('button', { name: /adicionar aos favoritos/i });
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockToggleFavorite).toHaveBeenCalledWith('Manaus');
  });

  test('CT03.2: Alteração Visual do Botão (Não Favoritado vs Favoritado)', () => {
    const { rerender } = render(
      <WeatherCard 
        data={mockWeatherData} 
        isFavorite={false} 
        onToggleFavorite={mockToggleFavorite} 
      />
    );

    expect(screen.getByRole('button', { name: /adicionar aos favoritos/i })).toHaveTextContent('☆');

    rerender(
      <WeatherCard 
        data={mockWeatherData} 
        isFavorite={true} 
        onToggleFavorite={mockToggleFavorite} 
      />
    );

    expect(screen.getByRole('button', { name: /remover dos favoritos/i })).toHaveTextContent('★');
  });
});