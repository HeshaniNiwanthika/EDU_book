import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import{FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
      userForm:FormGroup=new FormGroup({
        Name:new FormControl("",[Validators.required]),
        Age:new FormControl(""),
        Gender:new FormControl(""),
        Email:new FormControl(""),
        Username:new FormControl(""),
        Password:new FormControl(""[Validators.required,Validators.minLength(5)]),

      })
}
