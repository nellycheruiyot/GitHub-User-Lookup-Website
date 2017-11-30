import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { apiKey } from '../.env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub User Lookup';

  constructor(private http: Http){}

  userName = '';
  githubInfo: any = '';
  public_repos: any = '';

  searchName() {
    this.getUserInfo();
    this.getRepoInfo();
  }

  getUserInfo(){
  this.http.get('https://api.github.com/users/' + this.userName)
  .subscribe (
    (res:Response) => {
      const githubUser = res.json();
      this.githubInfo=githubUser;
      // this.public_repos=githubUser;
      console.log(githubUser);
     }
    )
  }

  getRepoInfo(){
  this.http.get('https://api.github.com/users/' + this.userName + '/repos')
  .subscribe (
    (res:Response) => {
      const githubRepoInfo = res.json();
      this.public_repos=githubRepoInfo;
      // this.public_repos=githubUser;
      console.log(githubRepoInfo);
     }
    )
  }
// searchPublicRepos() {
//   this.http.get('res.repos_url')
//   // this.http.get('https://api.github.com/users/repos' + this.public_repos)
//   .subscribe (
//     (res:Response) => {
//       const githubUserRepo = res.json();
//       this.public_repos=githubUserRepo;
//       console.log(githubUserRepo);
//     }
//   )
// }

}
