import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import {useFeed} from '../hooks/useFeed';
import FeedCard from '../components/FeedCard';

function PostDetailScreen() {
  const {feeds, onChangeVote, onSendComment} = useFeed();
  const [comment, setComment] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const feedDetail = feeds.find(e => e.id === route?.params?.id);

  const keyExtractor = (e, i: number) => {
    return `${i}`;
  };

  const renderSeparator = () => <View style={styles.divider} />;

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.marginBottom48}>
        <View style={styles.wrapperUser}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={IconBack}
              height={18}
              width={18}
              style={styles.marginLeft22}
            />
          </Pressable>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={48}
            height={48}
            style={styles.userAvatar}
          />
          <View style={styles.marginLeft16}>
            <Text style={styles.username}>{feedDetail?.user.name}</Text>
            <Text style={styles.createdAt}>{feedDetail?.createdAt}</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <FeedCard
          data={feedDetail}
          onChangeVote={onChangeVote}
          isDetail={true}
        />

        <FlatList
          scrollEnabled={false}
          data={feedDetail?.comments}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={keyExtractor}
          renderItem={({item, index}) => {
            return (
              <View style={styles.containerComment}>
                <Image
                  source={{
                    uri: item.userPhoto,
                  }}
                  width={36}
                  height={36}
                  style={styles.avatarComment}
                />
                <View style={{width: '90%'}}>
                  <Text style={styles.userNameComment}>{item.userName}</Text>
                  <Text style={styles.commentText}>{item.comment}</Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
      <View style={styles.containerReplyComment}>
        <TextInput
          value={comment}
          placeholder="Enter Comment"
          style={styles.flex}
          onChangeText={setComment}
        />
        <Button
          title="Comment"
          onPress={() => {
            onSendComment(comment, feedDetail?.id);
            setComment('');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;

const styles = StyleSheet.create({
  //   container: {height: 547},
  flex: {
    flex: 1,
  },
  avatarComment: {borderRadius: 24, marginRight: 16},
  containerComment: {
    flexDirection: 'row',
    minHeight: 72,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  marginBottom48: {marginBottom: 48, flexGrow: 1},
  wrapperUser: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  userAvatar: {borderRadius: 24, marginLeft: 24},
  marginLeft16: {marginLeft: 16},
  username: {fontWeight: '600', fontSize: 14, lineHeight: 16.94},
  createdAt: {fontWeight: '400', fontSize: 12, lineHeight: 18},
  divider: {height: 0.5, backgroundColor: '#C4C4C4'},
  margin24: {margin: 24},
  containerRowAction: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  commentsCount: {
    width: 24,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteCount: {
    width: 24,
    marginHorizontal: 11,
    textAlign: 'center',
  },
  marginLeft22: {marginLeft: 22},
  marginLeft24: {marginLeft: 24},
  marginRight22: {marginRight: 22},
  cardDivider: {height: 4, backgroundColor: '#C4C4C4'},
  userNameComment: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14.52,
    color: '#828282',
  },
  containerReplyComment: {
    position: 'absolute',
    bottom: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 10,
    borderTopColor: '#C4C4C4',
    borderTopWidth: 1,
  },
  commentText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.36,
  },
});
