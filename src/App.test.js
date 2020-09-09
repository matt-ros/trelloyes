import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import STORE from './store';

test('renders learn react link', () => {
  const { getByText } = render(<App STORE={STORE} />);
  const linkElement = getByText(/Trelloyes!/i);
  expect(linkElement).toBeInTheDocument();
});
