import { Component, OnInit } from '@angular/core';
import * as type from '../globals';
import {DataService} from "../data.service";

@Component({
  selector: 'app-fview-profile',
  templateUrl: './fview-profile.component.html',
  styleUrls: ['./fview-profile.component.css']
})
export class FviewProfileComponent implements OnInit {
  studentuser: string;
  studentaddress: string;
  id: string;
  degree: string;
  email: string;
  user: string;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.studentuser = type.firstName + " "+ type.lastName;
    this.studentaddress = type.address + ", " + type.city+ ", " + type.state + " " + type.zip;
    this.id = type.DepaulID;
    this.degree = type.degree;
    this.email = type.email;
    this.user = type.userName;
  }

}
