import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public myAuthServ: AuthService
  ) { }

  ngOnInit() {
  }

}
