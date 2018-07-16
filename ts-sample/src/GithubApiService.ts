import * as request from 'request';
export class GithubApiService {
  getUserInfo(username: string) {
    request.get(
      'https://api.github.com/users/' + username,
      (error: any, response: any, body: any) => {
        console.log(error);
        console.log(response);
        console.log(body);
      }
    );
  }

  getRepos() {}
}
