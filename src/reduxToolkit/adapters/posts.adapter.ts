import { AxiosResponse } from "axios";
import { HttpClientService } from "../../services/HttpClientService";
import { PostType } from "../../shared/types/posts.types";
import { UsersPostsMockData } from "../../shared/data/MockData";

const baseUrl: string = process.env.REACT_APP_SERVER_BASE_URL ?? "";

class PostsAdapter {
  static readonly endpoint = `${baseUrl}/posts`;

  async getUserPosts(userId: number) {
    // return HttpClientService.get<PostType[]>(
    //   `${PostsAdapter.endpoint}?/userId=${userId}`,
    //   {}
    // );
    return { data: UsersPostsMockData };
  }

  async deleteUserPost(
    userId: number,
    postId: number
  ): Promise<AxiosResponse<PostType>> {
    return HttpClientService.delete<PostType>(
      `${PostsAdapter.endpoint}/userId=${userId}/postId=${postId}`,
      {}
    );
  }
}

const postsAdapter = new PostsAdapter();
export default postsAdapter;
