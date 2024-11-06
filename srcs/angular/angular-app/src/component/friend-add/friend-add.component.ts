import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-friend-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="form-container">
      <h1>Add a friend</h1>
        <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="firstname">firstname</label>
            <input type="text" id="firstname" formControlName="firstname" required>
          </div>
          <div class="form-group">
            <label for="lastname">lastname</label>
            <input type="text" id="lastname" formControlName="lastname" required minlength="2">
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
    @if(this.valideForm) {
      <h1 style="color: red; font-size: 15px;">"Please enter a valid first and 
        last name. All fields are required."</h1>
    }
  `,
  styles: `
    .form-container {
      background-color: rgba(255, 255, 255, 0.5);
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(241, 241, 241, 0.1);
    }

    h1 {
      text-align: center;
      color: white;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      color: white;
    }

    input[type=text] {
      width: calc(100% - 22px);
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `
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

