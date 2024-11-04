import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FriendsListComponent } from '../friends-list/friends-list.component'
import { FriendAddComponent } from '../friend-add/friend-add.component'

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [FriendsListComponent, FriendAddComponent],
  template: `
  <div class="container">
    <div class="top-section">
      <div class="titre">
       <h1 class="titre-size">Welcome to {{title}} !</h1>
        <button (click)="httpclientdata()">hello word!</button>
        @if(data_httpclient) {
          <h1>{{data_httpclient}}</h1>
         <button (click)="clearData()">clear</button>
        }
      </div>
    </div>
    <div class="bottom-section">
      <div class="left-section">
      <app-friends-list></app-friends-list>
      </div>
     <div class="right-section">
      <app-friend-add></app-friend-add>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
  title = 'spring-boot / angular-app';
  private url: string = "http://localhost:3000/test1";
  data_httpclient: any;

  constructor(private http: HttpClient) {
  }

  httpclientdata(): void {
    this.http.get(this.url, { responseType: 'text' }).subscribe((response) => {
      this.data_httpclient = response;
    },
      (error) => { console.log(error); this.data_httpclient = "ba non" }
    );
  }

  clearData() {
    this.data_httpclient = "";
  }
}
