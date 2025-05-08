import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';
import { PostVM } from '@core';

describe('Card component', () => {
  const mockPost: PostVM & { onClick: () => void } = {
    id: '123',
    name: 'Teste Produto',
    thumbnail: 'imagemUrl',
    tagline: 'Uma descrição curta',
    votesCount: 42,
    cursor: '1231',
    onClick: vi.fn(),
  };


  it('renderiza nome, descrição, imagem e votos', () => {
    render(<Card {...mockPost} />);

    expect(screen.getByText('Teste Produto')).toBeInTheDocument();
    expect(screen.getByText('Uma descrição curta')).toBeInTheDocument();
    expect(screen.getByAltText('Teste Produto')).toHaveAttribute('src', mockPost.thumbnail);
    expect(screen.getByText(String(mockPost.votesCount))).toBeInTheDocument();
    expect(screen.getByTestId('image-logo')).toBeInTheDocument()
  });


  it('chama onClick ao clicar no card', () => {
    render(<Card {...mockPost} />);
    const content = screen.getByText('Teste Produto');

    fireEvent.click(content!);
    
    expect(mockPost.onClick).toHaveBeenCalled();
  });
});
