import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormsComponent} from "../forms";

@Component({
  selector: 'app-friend-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <h1>add a friend</h1>
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <div>
        <label for="firstname">firstname</label>
        <input type="text" id="firstname" formControlName="firstname" required>
      </div>
      <div>
        <label for="lastname">lastname</label>
        <input type="text" id="lastname" formControlName="lastname" required minlength="2">
      </div>
      <button type="submit">Submit</button>
    </form>
    @if(this.valideForm) {
      <h1 style="color: red;">"Please enter a valid first and last name. All fields are required."</h1>
    }
  `,

})
export class FriendAddComponent {

  private url: string = "http://localhost:3000/friend/creat";
  valideForm: boolean = false;

  constructor(private http: HttpClient) {
  }

  formGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  onSubmit() {
    if (this.formGroup.valid) {
      this.http.post(this.url, this.formGroup.value).subscribe((response) => {
        console.log("response = ", response)
        window.location.reload();
      },
        (error) => { console.log(error) }
      );
    } else {
      this.valideForm = true;
    }
  }
}
