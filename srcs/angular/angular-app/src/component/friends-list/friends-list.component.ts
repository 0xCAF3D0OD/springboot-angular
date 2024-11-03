import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1> Friends list</h1>
    @if (friend) {
    <div *ngFor='let friends of friend'>
      <h1>{{friends.firstname}}</h1>
      <h1>{{friends.lastname}}</h1>
      <button (click)="deleteFriend(friends)">x</button>
    </div>
    }
    @else {
      <h1>t as pas d'amis</h1>
    }
  `,
  styles: ['div {background-color: blue; display: flex; height: 50px; align-items: center}', 'h1 {padding-right: 10px; text: center}', 'button {background-color: #04AA6D; border: none; color: white; padding: 10px 5px; text- align: center;text-decoration: none;display: inline-block; font-size: 16px;}']
})
export class FriendsListComponent {
  friend: any;

  private url: string = "http://localhost:3000/friend/";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(): any {
    this.http.get(this.url,).subscribe((response) => {
      console.log("response = ", response)
      this.friend = response;
      console.log("friend =", this.friend)
    },
      (error) => { console.log(error) }
    );
  }

  deleteFriend(user: any): any {
    let deleteUrl = this.url + user.id;
    this.http.delete(deleteUrl).subscribe(() => {
      console.log("friend ", user.id, " delete")
      this.friend = this.friend.filter((friend: any) => friend.id !== user.id);
    },
      (error) => {
        console.log("delete friend error", error)
      });
  }
}
