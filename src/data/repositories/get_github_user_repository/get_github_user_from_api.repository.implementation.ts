import { GitHubUserEntity } from "../../../domain/entities";
import { GetGitHubUserRepository } from "../../../domain/repositories";
import { GetGitHubUserDTO } from "../../../domain/usecases";
import { HttpClient, HttpResponse } from "../../contracts/http_client";
import { GitHubUserModel } from "../../models/github_user.model";

export type GitHubUserAPIResponse = {
  username: string;
  nickname: string;
  avatar: string;
};

export class GetGitHubUserFromAPI implements GetGitHubUserRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getGitHubUser(params: GetGitHubUserDTO): Promise<GitHubUserEntity> {
    const { username } = params;
    const response: HttpResponse = await this.httpClient.get(
      `/users/${username}`
    );
    const user = GitHubUserModel.fromJson(response.body);
    return user;
  }
}
