import React from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import {Container} from '@Components';
import usePosts from '@Hooks/usePosts';

const filterByDate = data => {
  return data.sort((a, b) => {
    const dateA = new Date(a.due_on).getTime();
    const dateB = new Date(b.due_on).getTime();

    return dateA - dateB;
  });
};

const filterByTitle = data => data;

function Dashboard() {
  const {isLoading, hasError, data} = usePosts([filterByDate, filterByTitle]);

  const renderItem = ({item: {title}}) => <Text>{title}</Text>;

  if (hasError) {
    return <Text>Something was wrong...</Text>;
  }

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </Container>
  );
}

export default Dashboard;
