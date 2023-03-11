export class GitHubUserEntity {
  constructor(
    public readonly username: string,
    public readonly nickname: string,
    public readonly avatar: string
  ) {}
}
