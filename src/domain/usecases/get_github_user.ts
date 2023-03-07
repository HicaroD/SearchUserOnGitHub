import { GitHubUserEntity } from "../entities";
import { GetGitHubUserRepository } from "../repositories";

export type GetGitHubUserDTO = {
  username: String;
};

export class GetGitHubUserUsecase {
  constructor(private readonly usecase: GetGitHubUserRepository) {}

  async execute(params: GetGitHubUserDTO): Promise<GitHubUserEntity> {
    const { username } = params;

    if (!username) {
      // TODO: add semantic errors (those are business rules errors)
      throw new Error("Username is not valid");
    }
    return await this.usecase.getGitHubUser(params);
  }
}
