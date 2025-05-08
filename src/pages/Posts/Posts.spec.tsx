import { render, screen, fireEvent } from '@testing-library/react';
import { Posts } from './Posts';
import { useNavigate, useLocation } from 'react-router';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useFetchPosts } from './useFetchPosts';
vi.mock('@core', async () => ({
    Navbar: () => <div data-testid="navbar" />,
    Tabs: ({ activeTab }: any) => <div data-testid="tabs">{activeTab}</div>,
}));

vi.mock('./components/CardList/CardList', async () => ({
  CardList: ({ posts, onClickPost }: any) => (
    <div data-testid="cardlist">
      {posts.map((post: any) => (
        <div key={post.id} onClick={() => onClickPost(post.id)}>
          {post.name}
        </div>
      ))}
    </div>
  ),
}));

vi.mock('./useFetchPosts', async () => ({
  useFetchPosts: vi.fn(),
}));

vi.mock('react-router', async () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(),
}));

describe('Posts component', () => {
  const mockNavigate = vi.fn();
  const mockOnChangeOrder = vi.fn();

  beforeEach(() => {
    (useNavigate as any).mockReturnValue(mockNavigate);
    (useLocation as any).mockReturnValue({ pathname: '/posts/newest' });

    (useFetchPosts as any).mockReturnValue({
      data: [{ id: '1', name: 'Post de Teste' }],
      onFetchMoreData: vi.fn(),
      order: 'NEWEST',
      onChangeOrder: mockOnChangeOrder,
    });
  });

  it('should render', () => {
    render(<Posts />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('tabs')).toHaveTextContent('NEWEST');
    expect(screen.getByTestId('cardlist')).toBeInTheDocument();
  });

  it('onLoad with newest route', () => {
    render(<Posts />);
    expect(mockOnChangeOrder).toHaveBeenCalledWith('NEWEST');
  });

  it('should call navigate when click on Card', () => {
    render(<Posts />);
    fireEvent.click(screen.getByText('Post de Teste'));
    expect(mockNavigate).toHaveBeenCalledWith('/post/1');
  });
});
