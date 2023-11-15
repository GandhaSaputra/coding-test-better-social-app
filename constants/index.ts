import {FeedData} from '../interface/Feed';

export const feedData: FeedData[] = [
  {
    id: 1,
    createdAt: 'Mar 27, 2023',
    images: 'https://picsum.photos/200',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
    user: {
      name: 'Usup Suparma',
      photo: 'https://picsum.photos/200',
    },
    comments: [
      {
        comment:
          'Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        userName: 'Usup Suparma',
        userPhoto: 'https://picsum.photos/200',
      },
      {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        userName: 'Ujang Superman',
        userPhoto: 'https://picsum.photos/200',
      },
    ],
    vote: 7,
  },
  {
    id: 2,
    createdAt: 'Sept 1, 2023',
    images: 'https://picsum.photos/200',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
    user: {
      name: 'Ujang Suparma',
      photo: 'https://picsum.photos/200',
    },
    comments: [
      {
        userName: 'Yunus Suparman',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        userPhoto: 'https://picsum.photos/200',
      },
    ],
    vote: 15,
  },
  {
    createdAt: 'Oct 17, 2023',
    id: 3,
    images: 'https://picsum.photos/200',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
    user: {
      name: 'Johnny Suparma',
      photo: 'https://picsum.photos/200',
    },
    comments: [
      {
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        userName: 'Jaenab Suparmin',
        userPhoto: 'https://picsum.photos/200',
      },
    ],
    vote: -3,
  },
];
