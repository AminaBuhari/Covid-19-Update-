import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalData from './Components/globalData';

describe('Global Dta', () => {
  describe('Region data', () => {
    it('has Text element', () => {
      render(<GlobalData />);
      const element = screen.getByText('Canada');
      expect(element).toBeInTheDocument();
    });
  });
});

