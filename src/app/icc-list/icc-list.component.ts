import { Component, OnInit } from '@angular/core';
import { IccService, Icc } from '../api/icc.service';

@Component({
  selector: 'app-icc-list',
  templateUrl: './icc-list.component.html',
  styleUrls: ['./icc-list.component.css']
})
export class IccListComponent implements OnInit {
  iccs: Array<Icc> = [];

  constructor(
    private myIccServ: IccService
  ) { }

  ngOnInit() {
    this.fetchIccs()
  }

  fetchIccs() {
    this.myIccServ.getIccList()
      .then((response: Array<Icc>) => {
        this.iccs = response;
      })
      .catch((err) => {
        alert("Sorry, We could not get our list of iccs");
        console.log(err); // for us to know what is the error
      })
  } 
}