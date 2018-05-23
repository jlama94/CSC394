import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';


import {User} from '../../models/User';
import { DataService } from '../Data.service';


@Component({
  selector: 'app-accountcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccountcreationComponent implements OnInit {
  public depaulForm2: FormGroup;
  public user: User; // Store the new user in this User object



  constructor(private router: Router, private service: DataService) { }

  // on Init then create form
  ngOnInit() {
    this.depaulForm2 = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      lastName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      address: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      zip: new FormControl('',Validators.required),
      depaulID: new FormControl('',Validators.required),
      degree: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      userID: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      userType: new FormControl("student")
    });
  }


  /**
   *
   *
   * @param {FormGroup} depaulForm2
   * @memberof AccountcreationComponent
   */
  addUser(depaulForm2) {
    if(depaulForm2.valid) {
      this.user = this.depaulForm2.value;
      console.log(this.user);
      this.service.addUser(this.user).subscribe(x => {
        console.log('New user has been registered.');
      });
      this.router.navigateByUrl('/optin');
    }
  }

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      }
    };
  }
}
