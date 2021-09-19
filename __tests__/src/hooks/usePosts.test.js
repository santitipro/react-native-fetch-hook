import {renderHook} from '@testing-library/react-hooks';
import usePosts from '~/src/hooks/usePosts';
import PostsService from '~/src/services/posts';

jest.mock('~/src/services/posts', () => ({
  instance: {getPosts: jest.fn().mockResolvedValue({data: []})},
}));

test('Test usePosts', () => {
  const {result} = renderHook(() => usePosts());

  expect(result.current.isLoading).toEqual(true);
  expect(result.current.hasError).toEqual(false);
  expect(result.current.data).toEqual(null);
  expect(PostsService.instance.getPosts).toHaveBeenCalled();
});
