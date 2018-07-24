import { Component, OnInit } from '@angular/core';
import { RequestSubmission, RequestService, Request } from '../api/request.service';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestForm: RequestSubmission = new RequestSubmission();

  constructor(
    private myRequestServ: RequestService,
    private myAuthServ: AuthService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
  }

  questionSubmit() {
   //console.log(this.userForm); // this is just to check if the userForm has the right structure compared to the DB
    this.myRequestServ.postRequest(this.requestForm)
    //pass the form inuputs to the service ... rajouter la classe Phone
      .then((response: Request) => {
        //redirect away to the details page of the new phonee
        alert("Thank you for your question, we will revert to you soon.");
        this.myRouterServ.navigateByUrl(`/`);
      })
      .catch((err) => {
        alert("Sorry! ther was a problem submitting your question");
        console.log(err);
      })
  }

}
