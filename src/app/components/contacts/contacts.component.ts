import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  emailId: string = "alammohammedshabir@gmail.com";
  indiaMobNumber:string = "+91 8777 303017";
  uaeMobNumber: string = "+971 5880 93589";

  constructor() { }

  ngOnInit(): void {
  }

}
