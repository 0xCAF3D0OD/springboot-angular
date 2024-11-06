import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="form-container">
      <div class="form-group">
        <h1>{{titre}}</h1>
        <h1> Friends list</h1>
        <button class="button-delete" (click)="enableFriendDeletionMode()">delete a friend</button>
      </div>
      <div class="form-group">
     @if (friend && friend.length > 0) {
     <div *ngFor='let friends of friend'>
        <h1>{{friends.firstname}}</h1>
       <h1>{{friends.lastname}}</h1>
       @if (delete_friends) {
        <button (click)="deleteFriend(friends)">x</button>
       }
     </div>
     }
     @else {
        <h1>t as pas d'amis</h1>
     }
      </div>
    </div>
  `,
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  friend: any;
  delete_friends: boolean = false;
  titre: string = "test";
  private url: string = "http://localhost:3000/friend/";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(): any {
    this.http.get(this.url,).subscribe((response) => {
      console.log(response);
      this.friend = response;
    },
      (error) => { console.log(error) }
    );
  }

  deleteFriend(user: any): any {
    let deleteUrl = this.url + user.id;
    this.http.delete(deleteUrl).subscribe(() => {
      console.log("friend ", user.id, " delete")
      this.friend = this.friend.filter((friends_copy: any) => friends_copy.id !== user.id);
    },
      (error) => {
        console.log("delete friend error", error)
      });
  }

  enableFriendDeletionMode(): any {
    this.delete_friends = !this.delete_friends;
  }

}
