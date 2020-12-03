import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchMissions } from './api/fetchShow';

jest.mock('./api/fetchShow');

test("App renders", () => {
  render(<App />);
});




