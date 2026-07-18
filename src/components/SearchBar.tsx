import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setError('Por favor, digite o nome de uma cidade.');
      return;
    }

    setError('');
    onSearch(query.trim());
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Busca de clima">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o nome da cidade..."
            aria-label="Nome da cidade"
          />
          <button type="submit">Buscar</button>
        </div>
        {error && (
          <span style={{ color: 'red', fontSize: '12px' }} role="alert">
            {error}
          </span>
        )}
      </div>
    </form>
  );
};