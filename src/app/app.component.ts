import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { apiKey } from '.../env'

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
  searchName() {
  this.http.get('https://api.github.com/users/' + this.userName)
  .subscribe (
    (res:Response) => {
      const githubUser = res.json();
      this.githubInfo=githubUser;
      console.log(githubUser);
    }
  )
}

}
