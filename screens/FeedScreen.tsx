import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FeedCard from '../components/FeedCard';
import {FeedData} from '../interface/Feed';
import {useFeed} from '../hooks/useFeed';

function FeedScreen() {
  const {feeds, onChangeVote} = useFeed();
  const navigation = useNavigation();

  const keyExtractor = (e: FeedData) => {
    return `${e.id}`;
  };

  const renderFeedCard = ({item}: {item: FeedData}) => {
    return (
      <FeedCard
        data={item}
        onChangeVote={onChangeVote}
        onGoToDetails={data => {
          navigation.navigate('post-detail', {
            id: data.id,
          });
        }}
        isDetail={false}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feeds}
        keyExtractor={keyExtractor}
        renderItem={renderFeedCard}
      />
    </SafeAreaView>
  );
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
