import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../components/SearchBar';

describe('SearchBar Component - UC01', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  test('CT01.1: Sucesso na Submissão da Busca', () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByLabelText('Nome da cidade');
    const button = screen.getByRole('button', { name: /buscar/i });

    fireEvent.change(input, { target: { value: 'Manaus' } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('Manaus');
  });

  test('CT02.1: Bloqueio de Busca Vazia', () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const button = screen.getByRole('button', { name: /buscar/i });

    fireEvent.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
    expect(screen.getByRole('alert')).toHaveTextContent('Por favor, digite o nome de uma cidade.');
  });

  test('CT03.1: Submissão via Tecla Enter', () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByLabelText('Nome da cidade');

    fireEvent.change(input, { target: { value: 'São Paulo' } });
    fireEvent.submit(screen.getByRole('form', { name: /busca de clima/i }));

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('São Paulo');
  });
});