export default interface RepoModel {
  id: string | number;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string[];
}
