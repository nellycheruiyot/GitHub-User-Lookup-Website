import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub User Lookup';

  constructor(private http: Http){}

  userName = '';
  searchName() {
  this.http.get('https://api.github.com/users' + this.userName)
}

}
