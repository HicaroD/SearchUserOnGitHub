import { GitHubUserEntity } from "../../../domain/entities";
import { GetGitHubUserRepository } from "../../../domain/repositories";
import { GetGitHubUserDTO } from "../../../domain/usecases";
import { HttpClient, HttpResponse } from "../../contracts/http_client";
import { GitHubUserModel } from "../../models/github_user.model";

// TODO: should I abstract that dependency?
import dotenv from "dotenv";
dotenv.config();

export type GitHubUserAPIResponse = {
  username: string;
  nickname: string;
  avatar: string;
};

export class GetGitHubUserFromAPI implements GetGitHubUserRepository {
  constructor(private readonly httpClient: HttpClient) {}

  getQueryParameters(): Object {
    const githubAPIKey = process.env.GITHUB_API_KEY;
    return { Authorization: `Bearer ${githubAPIKey}` };
  }

  async getGitHubUser(params: GetGitHubUserDTO): Promise<GitHubUserEntity> {
    const { username } = params;
    const queryParameters = this.getQueryParameters();

    const response: HttpResponse = await this.httpClient.get(
      `/users/${username}`,
      queryParameters
    );
    const user = GitHubUserModel.fromJson(response.body);
    return user;
  }
}
