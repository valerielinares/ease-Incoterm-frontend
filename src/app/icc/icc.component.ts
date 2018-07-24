import { Component, OnInit } from '@angular/core';
import { Icc, IccService } from '../api/icc.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-icc',
  templateUrl: './icc.component.html',
  styleUrls: ['./icc.component.css']
})
export class IccComponent implements OnInit {
  id: string;
  iccItem: Icc;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myIccServ: IccService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
    .subscribe((myParams) => {
      // IccId comes from the route's PATH
      // { PATH: "icc/:iccId"}
      console.log(myParams.get("iccId"));
      this.id = myParams.get("iccId");
      this.fetchIccDetails();
  });
}

  fetchIccDetails() {
    this.myIccServ.getIccItem(this.id) // this.id obtenu dans le code au-dessus : this.id = myParams.get("phoneId")
      .then((response: Icc) => {
        //console.log(response);
        // connects the DATA from the API to the COMPONENT state
          this.iccItem = response;
      })
      .catch((err) => {
        alert("Sorry! There was a problem getting Icc's details");
        console.log(err);
      });
  }
}
