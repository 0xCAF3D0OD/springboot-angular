import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-friend-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <h1>add a friend</h1>
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <div>
        <label for="firstname">firstname</label>
        <input type="text" id="firstname" formControlName="firstname">
      </div>
      <div>
        <label for="lastname">lastname</label>
        <input type="text" id="lastname" formControlName="lastname">
      </div>
      <button type="submit">Submit</button>
    </form>
  `,
  styles: ``
})
export class FriendAddComponent {

  private url: string = "http://localhost:3000/friend/creat";

  constructor(private http: HttpClient) {
  }

  formGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.http.post(this.url, this.formGroup.value).subscribe((response) => {
      console.log("response = ", response)
      window.location.reload();
    },
      (error) => { console.log(error) }
    );
    console.log(this.formGroup.value);
  }
}
