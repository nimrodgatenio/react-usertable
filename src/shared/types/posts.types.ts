export interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostSliceType {
  selectedUserId: number;
  selectedUserPosts: PostType[];
  httpError: any;
}
