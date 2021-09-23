import React from 'react';
import {render} from '@testing-library/react-native';
import Dashboard from '@Screens/dashboard';
import useTodos from '~/src/hooks/useTodos';

jest.mock('~/src/hooks/useTodos');

describe('Test Dashboard', () => {
  test('should render success', () => {
    useTodos.mockReturnValue({isLoading: false, data: null, hasError: false});
    render(<Dashboard />);

    expect(useTodos).toHaveBeenCalled();
  });

  test('call hook when render screen', () => {
    useTodos.mockReturnValue({
      isLoading: false,
      data: [{title: 'hello', id: 1}],
      hasError: false,
    });
    const {getByTestId} = render(<Dashboard />);

    expect(useTodos).toHaveBeenCalled();
    expect(getByTestId('todosList')).toBeTruthy();
  });
});
