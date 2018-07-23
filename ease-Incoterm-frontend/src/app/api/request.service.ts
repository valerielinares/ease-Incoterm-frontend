import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './auth.service';

const backendUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  constructor(
    private myHttpServ: HttpClient
  ) { }

// GET /api/user/:id
  getUserInfo(id) {
  // return the Pormise of the request (component will ".then" & ".catch")
  return this.myHttpServ
    .get(
      `${backendUrl}/api/user/${id}`,
      { withCredentials: true }
    )
    .toPromise()
  }

// POST /api/request
  postRequest(requestContent: RequestSubmission) { // we created the class PhoneSubmission so that we are sure that phoneInfo
    // will be passed on with the right format 
    // return the Promise of the request (component will ".then() and ".catch()"))
      return this.myHttpServ  
        .post(
          `${backendUrl}/api/request`,
          requestContent,
          { withCredentials: true } // send cookies across domains
        )
        .toPromise()
  }
}

export class Request {
  _id: string;
  author: User; // SYNTAXE POUR LUI DIRE QUE C'EST LES INFOS DE L'USER
  question: string;
}

export class RequestSubmission {
  question: string;
}