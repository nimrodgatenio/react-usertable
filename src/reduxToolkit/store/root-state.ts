import { PostSliceType } from "../../shared/types/posts.types";
import { UsersSliceType } from "../../shared/types/user.types";

export interface RootState {
    usersState: UsersSliceType;
    postsState: PostSliceType;
}
