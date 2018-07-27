import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript("./src/app/tool/script.js"); 

  }

  loadScript(url){
    var costs = document.getElementsByName('costop');
    var iccs = document.getElementsByName('icc'); 

      for(let i=0; i< costs.length; i++) {
        costs[i].addEventListener('click', function() {
          if (costs[i].checked === true) {
                   
             for(let x = i; x >= 0; x--){
               costs[x].checked = true;
               //console.log(costs[x].checked)
               
             }
            } else {
          for(let x = i+1; x > 1 && x < costs.length ; x++){
            costs[x].checked = false;
            costs[i].checked = true;
            //console.log(costs[x].checked)
          }
        };
       }   
      ) 
    }

    for(let i=0; i< iccs.length; i++) {
      iccs[i].addEventListener('click', function() {
        if (iccs[i].checked === true) {
                 
           for(let x = i; x >= 0; x--){
             iccs[x].checked = true;
             //console.log(iccs[x].checked)
             
           }
          } else {
        for(let x = i+1; x > 1 && x < iccs.length ; x++){
          iccs[x].checked = false;
          iccs[i].checked = true;
          //console.log(iccs[x].checked)
        }
      };
     }   
    ) 
  }






  }
}

