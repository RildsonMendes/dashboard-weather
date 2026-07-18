describe('Configuração do Ambiente', () => {
  test('deve confirmar que o Jest e o TypeScript estão funcionando juntos', () => {
    const soma = (a: number, b: number): number => a + b;
    expect(soma(2, 3)).toBe(5);
  });
});