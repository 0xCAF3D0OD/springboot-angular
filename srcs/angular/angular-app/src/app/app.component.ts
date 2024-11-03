import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FriendsListComponent } from '../component/friends-list/friends-list.component'
import { FriendAddComponent } from '../component/friend-add/friend-add.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FriendsListComponent, FriendAddComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <h2>kevin le kikook</h2>
    <h2>avec fetch = {{data_fetch}}</h2>
    <h2>avec httpclient = {{data_httpclient}}</h2>

    <app-friends-list></app-friends-list>
    <app-friend-add></app-friend-add>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-app';
  private url: string = "http://localhost:3000/test1";
  data_fetch: any;
  data_httpclient: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchdata();
    this.httpclientdata();
  }

  private fetchdata(): void {
    fetch(this.url)
      .then((response) => response.text())
      .then((quotesData) => {
        this.data_fetch = quotesData;
        console.log(quotesData);
      })
      .catch((error) => {
        this.data_fetch = "ba non";
        console.error(error);
      });
  }

  private httpclientdata(): void {
    this.http.get(this.url, { responseType: 'text' }).subscribe((response) => {
      this.data_httpclient = response;
    },
      (error) => { console.log(error); this.data_httpclient = "ba non" }
    );
  }
}
