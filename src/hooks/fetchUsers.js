/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import UsersService from '@Services/users/users.service';

function useUsers() {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState({...state, isLoading: true, hasError: false});
        const result = await UsersService.instance.getUsers();
        const filteredData = filterResult(result.data);
        setState({
          ...state,
          data: filteredData,
          isLoading: false,
          hasError: false,
        });
      } catch {
        setState({...state, isLoading: false, hasError: true});
      }
    }
    fetchData();
  }, []);

  const filterResult = data => {
    return data.sort((a, b) => {
      const dateA = new Date(a.due_on).getTime();
      const dateB = new Date(b.due_on).getTime();

      return dateA - dateB;
    });
  };

  return state;
}

export default useUsers;
