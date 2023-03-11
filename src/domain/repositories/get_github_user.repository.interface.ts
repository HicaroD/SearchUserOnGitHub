import { GitHubUserEntity } from "../entities";
import { GetGitHubUserDTO } from "../usecases";

export interface GetGitHubUserRepository {
  getGitHubUser(params: GetGitHubUserDTO): Promise<GitHubUserEntity>;
}
