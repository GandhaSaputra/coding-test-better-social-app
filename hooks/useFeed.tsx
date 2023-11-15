import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {FeedData} from '../interface/Feed';
import {feedData} from '../constants';

export interface FeedContextInterface {
  feeds: FeedData[];
  onChangeVote: (type: string, id: number) => void;
  onSendComment: (content: string, id: number) => void;
}

export const FeedContext = createContext<FeedContextInterface>({
  feeds: feedData,
  onChangeVote: () => {},
  onSendComment: () => {},
});

export const FeedProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
  const [feeds, setFeeds] = useState<FeedData[]>(feedData);

  const onChangeVote = (type: string, id: number) => {
    setFeeds(prev => {
      return prev.map(e => {
        if (e.id === id) {
          return {
            ...e,
            vote: type === 'up' ? e.vote + 1 : e.vote - 1,
          };
        } else {
          return e;
        }
      });
    });
  };

  const onSendComment = (content: string, id: number) => {
    const comment = {
      comment: content,
      userName: 'Yasop Suparman',
      userPhoto: 'https://picsum.photos/200',
    };

    setFeeds(prev => {
      return prev.map(e => {
        if (id === e.id) {
          return {
            ...e,
            comments: [comment, ...e.comments],
          };
        } else {
          return e;
        }
      });
    });
  };

  return (
    <FeedContext.Provider
      value={{
        feeds,
        onChangeVote,
        onSendComment,
      }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => {
  const {feeds, onChangeVote, onSendComment} = useContext(FeedContext);

  return {
    feeds,
    onChangeVote,
    onSendComment,
  };
};
