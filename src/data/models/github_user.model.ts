import { GitHubUserEntity } from "../../domain/entities";
import { GitHubUserAPIResponse } from "../repositories";

export class GitHubUserModel extends GitHubUserEntity {
  static fromJson(json: GitHubUserAPIResponse): GitHubUserModel {
    return new GitHubUserModel(json.username, json.nickname, json.avatar);
  }
}
