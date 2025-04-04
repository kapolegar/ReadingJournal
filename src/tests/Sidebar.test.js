import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

describe('Sidebar', () => {
  it('renderiza o título "Reading Journal"', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const title = screen.getByText(/Reading Journal/i);
    expect(title).toBeInTheDocument();
  });

  it('tem o botão do menu lateral (menu icon)', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });
});
