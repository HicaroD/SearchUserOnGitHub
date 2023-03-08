import { GitHubUserEntity } from "../../../domain/entities";
import { GetGitHubUserRepository } from "../../../domain/repositories";
import { GetGitHubUserDTO } from "../../../domain/usecases";
import { HttpClient } from "../../contracts/http_client";

export class GetGitHubUserFromAPI implements GetGitHubUserRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getGitHubUser(params: GetGitHubUserDTO): Promise<GitHubUserEntity> {
    // TODO: Implement communication with API
    throw new Error("Method not implemented.");
  }
}
