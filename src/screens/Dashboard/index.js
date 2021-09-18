import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Container} from '@Components';
import useUsers from '../../hooks/fetchUsers';

function Dashboard() {
  const {isLoading, hasError, data} = useUsers();

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {data.map(({id, title}) => (
            <Text key={id}>{title}</Text>
          ))}
        </>
      )}
    </Container>
  );
}

export default Dashboard;
