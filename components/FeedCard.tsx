import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
// import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
// import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import {FeedData} from '../interface/Feed';
import ContentText from './MoreText';

interface FeedCardProps {
  data: FeedData;
  onGoToDetails: (data: FeedData) => void;
  onChangeVote: (type: string, id: number) => void;
  isDetail: boolean;
  // onSendComment: (content: string, id: number) => void;
}

const FeedCard: FC<FeedCardProps> = React.memo(
  ({
    data,
    onGoToDetails,
    onChangeVote,
    isDetail,
    // onSendComment,
  }) => {
    const {content, images, user, comments, vote, createdAt} = data;

    return (
      <Pressable onPress={() => onGoToDetails(data)}>
        <View>
          {!isDetail && (
            <View style={styles.wrapperUser}>
              <Image
                source={{
                  uri: user.photo,
                }}
                width={48}
                height={48}
                style={styles.userAvatar}
              />
              <View style={styles.marginLeft16}>
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.createdAt}>{createdAt}</Text>
              </View>
            </View>
          )}
          <View style={styles.divider} />
          <View>
            <ContentText text={content} maxLines={3} />
            <Image
              source={{
                uri: images,
              }}
              height={200}
            />
          </View>
          <View style={styles.containerRowAction}>
            <View style={styles.rowFlex}>
              <Image
                source={IconShare}
                height={18}
                width={18}
                style={styles.marginLeft22}
              />
              <Image
                source={IconComment}
                height={18}
                width={18}
                style={styles.marginLeft24}
              />
              <Text style={styles.commentsCount}>{comments.length}</Text>
            </View>
            <View style={styles.row}>
              <Image
                source={IconBlock}
                height={18}
                width={18}
                style={styles.marginLeft22}
              />
              <Pressable onPress={() => onChangeVote('down', data.id)}>
                <Image
                  source={IconDownvoteInactive}
                  height={18}
                  width={18}
                  style={styles.marginLeft24}
                />
              </Pressable>
              <Text style={styles.voteCount}>{vote}</Text>
              <Pressable onPress={() => onChangeVote('up', data.id)}>
                <Image
                  source={IconUpvoteInactive}
                  height={18}
                  width={18}
                  style={styles.marginRight22}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.cardDivider} />
      </Pressable>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
  },
);

export default FeedCard;

const styles = StyleSheet.create({
  //   container: {height: 547},
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
});
