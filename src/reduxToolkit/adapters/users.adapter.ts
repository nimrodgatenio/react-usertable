// import { AxiosResponse } from "axios";
// import { HttpClientService } from "../../services/HttpClientService";
// import { UserType } from "../../shared/types/user.types";
import { UsersMockData } from "../../shared/data/MockData";

const baseUrl: string = process.env.REACT_APP_SERVER_BASE_URL ?? "";

class UsersAdapter {
  static readonly endpoint = `${baseUrl}/users`;

  async getUsers() {
    // return HttpClientService.get<UserType[]>(`${UsersAdapter.endpoint}`, {});
    return { data: UsersMockData };
  }
}
const usersAdapter = new UsersAdapter();
export default usersAdapter;
