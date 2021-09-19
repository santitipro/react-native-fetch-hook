/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import PostsService from '@Services/posts';

function usePosts(filters) {
  const [state, setState] = useState({
    isLoading: true,
    hasError: false,
    data: null,
  });

  useEffect(() => {
    async function fetch() {
      try {
        setState({...state, isLoading: true});
        const result = await PostsService.instance.getPosts();
        setState({
          ...state,
          data: applyFilters(result.data),
          isLoading: false,
          hasError: false,
        });
      } catch (error) {
        console.log(error);
        setState({...state, isLoading: false, hasError: true});
      }
    }
    fetch();
  }, []);

  const applyFilters = data =>
    filters ? filters.reduce((acc, b) => b(acc), data) : data;

  return {...state};
}

export default usePosts;
