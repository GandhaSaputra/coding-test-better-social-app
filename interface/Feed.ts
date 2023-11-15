export interface FeedData {
  id: number;
  images: string;
  content: string;
  user: {
    name: string;
    photo: string;
  };
  comments: {
    comment: string;
    userName: string;
    userPhoto: string;
  }[];
  vote: number;
  createdAt: string;
}
