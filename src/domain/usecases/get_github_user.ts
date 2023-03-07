import { GitHubUserEntity } from "../entities";
import { InvalidUsername } from "../errors";
import { GetGitHubUserRepository } from "../repositories";

export type GetGitHubUserDTO = {
  username: String;
};

export class GetGitHubUserUsecase {
  constructor(private readonly usecase: GetGitHubUserRepository) {}

  async execute(params: GetGitHubUserDTO): Promise<GitHubUserEntity> {
    const { username } = params;

    if (!username) {
      throw new InvalidUsername("Username is not valid");
    }
    return await this.usecase.getGitHubUser(params);
  }
}
