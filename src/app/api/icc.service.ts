import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";
const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class IccService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

// GET /api/iccList
  getIccList() {
  // return the Pormise of the request (component will ".then" & ".catch")
  return this.myHttpServ
    .get(
      `${backendUrl}/api/iccList`,
      { withCredentials: true }
    )
    .toPromise()
  }

// GET /api/iccList/:id
  getIccItem(id) { // we pass the id as a parameter and add it into the get request
  return this.myHttpServ
  .get(
    `${backendUrl}/api/iccList/${id}`,
    { withCredentials: true } // send cookies across domains
  )
  .toPromise();
  }  
}

export class Icc {
  _id: string;
  iccShortCode: string;
  iccIndex: string;
  iccFulName: string;
  iccDefinition: string;
  assocLinerTerm: string;
}
