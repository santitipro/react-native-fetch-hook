import React from 'react';
import {render} from '@testing-library/react-native';
import {Dashboard} from '~/src/screens';
import usePosts from '~/src/hooks/usePosts';

jest.mock('~/src/hooks/usePosts');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Test dashboard', () => {
  usePosts.mockReturnValue({isLoading: false, hasError: true, data: null});

  test('should render success', () => {
    render(<Dashboard />);
  });

  test('should render success and call usePosts hooks', () => {
    render(<Dashboard />);

    expect(usePosts).toHaveBeenCalledWith([
      expect.any(Function),
      expect.any(Function),
    ]);
  });
});
